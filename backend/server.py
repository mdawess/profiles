import flask
from flask import jsonify, render_template
from flask import request
import os
from pull_data import make_competitor_dictionary
from flask_cors import CORS
from passwords import check_password

app = flask.Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/healthcheck', methods=['GET'])
def healthCheck():
    return jsonify({'status': 'healthy'}), 200

@app.route('/api/rcct/prod/getdata', methods=['GET'])
def get_data():
    data = make_competitor_dictionary()
    try:
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/verify/<string:password>', methods=['POST'])
def verify(password: str):
    # Need to update this so it works with cold start
    if check_password(password):
        return jsonify({'status': 'verified'})
    else:
        return jsonify({'status': 'unverified'})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=(int(
        os.environ.get("PORT", 8080)) or 5000), threaded=True)