import requests
import os
from passwords import PASSWORD

BASE_URL = 'http://localhost:8080/'
TEST_URL = 'http://127.0.0.1:8080/'
REAL_URL = 'https://rcct-profiles.herokuapp.com/'

def test_healthcheck():
    response = requests.get(TEST_URL + 'healthcheck')
    # assert response.json()['status'] == 'healthy'
    print(response.json())

def test_get_data():
    response = requests.get(REAL_URL + 'api/rcct/prod/getdata')
    # assert response.status_code == 200
    print(response.json())

def test_verify():
    response = requests.get(TEST_URL + 'verify/' + PASSWORD)
    # assert response.json()['status'] == 'verified'
    print(response.json())

if __name__ == '__main__':
    test_get_data()
    # test_verify()
    # test_healthcheck()