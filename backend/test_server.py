import requests
import os
from passwords import PASSWORD

BASE_URL = 'http://localhost:8080/'
TEST_URL = 'http://127.0.0.1:8080/'

def test_healthcheck():
    response = requests.get(TEST_URL + 'healthcheck')
    # assert response.json()['status'] == 'healthy'
    print(response.json())

def test_get_data():
    response = requests.get(TEST_URL + 'getdata')
    # assert response.status_code == 200
    print(response.json())

if __name__ == '__main__':
    # test_get_data()
    # test_password()
    test_healthcheck()