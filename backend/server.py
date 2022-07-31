import flask
from flask import jsonify
from flask import request
import os
from pull_data import make_competitor_dictionary

app = flask.Flask(__name__)


@app.route('/', methods=['GET'])
def healthCheck():
    return jsonify({'status': 'healthy'}), 200


@app.route('/getdata', methods=['GET'])
def get_data():
    data = make_competitor_dictionary()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(
        os.environ.get("PORT", 8080)), threaded=True)