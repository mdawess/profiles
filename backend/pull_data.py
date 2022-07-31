from unittest import result
from google.oauth2 import service_account
from googleapiclient.discovery import build
import os

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
# SERVICE_ACCOUNT_FILE = './backend/keys.json'
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_ROOT, 'backend/keys.json')
SPREADSHEET_ID = '1AJQDzhBHsfJCwFFfKRGm8hZ5xManZqbfQQ4K--wkq3I'
RANGE = 'responses!A1:AB200'

credentials = None
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

service = build('sheets', 'v4', credentials=credentials)

sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range=RANGE).execute()

# Gets the list of headings
headings = result['values'][0]

# helper function
def mean(numbers):
    return float(sum(numbers)) / max(len(numbers), 1)

def make_competitor_dictionary() -> dict:
    """
    Takes a list of responses and returns a dictionary of competitor names and their responses.
    """
    responses = result['values'][1:]
    competitor_dict = {}
    for response in responses:
        if response[1] not in competitor_dict and response[2] == 'No':
            competitor_dict[response[1]] = {
                'ocean': [int(response[3]), int(response[4]), int(response[5]), int(response[6]), int(response[7])],
                'skills': [int(response[8]), int(response[9]), int(response[10]), int(response[11])],
                'workExperience': response[12].split(','),
                'workingStyle': response[13].split(','),
                'developmentGoals': response[14].split(','),
                'notableCompetitions': response[15].split(','),
                'researchSubject': response[16],
            }
        elif response[1] not in competitor_dict and response[2] == 'Yes':
            competitor_dict[response[1]] = {
                'skills': [int(response[17]), int(response[18]), int(response[19]), int(response[20])],
                'workingStyle': response[21].split(','),
            }
        elif response[1] in competitor_dict and response[2] == 'Yes':
            competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[17]), int(response[18]), int(response[19]), int(response[20])])]
            competitor_dict[response[1]]['workingStyle'].append(response[21].split(','))
        elif response[1] in competitor_dict and response[2] == 'No':
            competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[8]), int(response[9]), int(response[10]), int(response[11])])]
            competitor_dict[response[1]]['workingStyle'].append(response[13].split(','))
            competitor_dict[response[1]]['ocean'] = [int(response[3]), int(response[4]), int(response[5]), int(response[6]), int(response[7])]
            competitor_dict[response[1]]['workExperience'] = response[12].split(',')
            competitor_dict[response[1]]['workingStyle'] = response[13].split(',')
            competitor_dict[response[1]]['developmentGoals'] = response[14].split(',')
            competitor_dict[response[1]]['notableCompetitions'] = response[15].split(',')
            competitor_dict[response[1]]['researchSubject'] = response[16]

    return competitor_dict

if '__main__' == __name__:
    print(make_competitor_dictionary())



