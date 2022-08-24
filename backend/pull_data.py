from google.oauth2 import service_account
from googleapiclient.discovery import build
from competitors import grad_years
import pandas as pd
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
values = result.get('values', [])
# print(values)
df = pd.DataFrame(values)

#replace all non trailing blank values created by Google Sheets API
#with null values
df_replace = df.replace([''], ['TBD'])

processed_dataset = df_replace.values.tolist()

# print(processed_dataset[1:])

# helper function
def mean(numbers):
    """Calculates the mean of a list of numbers"""
    return round(float(sum(numbers)) / max(len(numbers), 1), 1)

def get_grad_year(competitor_name: str) -> int:
    """
    Takes a competitor name and returns their graduation year.
    """
    for grad_year in grad_years:
        if competitor_name in grad_years[grad_year]:
            return grad_year

def make_competitor_dictionary() -> dict:
    """
    Takes a list of responses and returns a dictionary of competitor names and their responses.
    """
    responses = result['values'][1:]
    competitor_dict = {}
    for response in processed_dataset:
        if response[1] not in competitor_dict and response[2] == 'No':
            competitor_dict[response[1]] = {
                # 3: O, 4: C, 5: E, 6: A, 7: N -> On the original sheet
                # This is altered to fit w/ frontend code
                'ocean': [float(response[3]), float(response[7]), float(response[6]), float(response[5]), float(response[4])],
                'skills': [int(response[8]), int(response[9]), int(response[10]), int(response[11])],
                'workExperience': response[12].split(','),
                'workingStyle': response[13].split(','),
                'developmentGoals': response[14].split(','),
                'notableCompetitions': response[15].split(','),
                'researchSubject': response[16],
                'year': get_grad_year(response[1]),
                'headshot': ''
            }
            
        elif response[1] not in competitor_dict and response[2] == 'Yes':
            if response[21] is not None: 
                competitor_dict[response[1]] = {
                    'skills': [int(response[17]), int(response[18]), int(response[19]), int(response[20])],
                    'workingStyle': response[21].split(',')
                }
            else:
                competitor_dict[response[1]] = {
                    'skills': [int(response[17]), int(response[18]), int(response[19]), int(response[20])],
                    'workingStyle': []
                }
        elif response[1] in competitor_dict and response[2] == 'Yes':
            if response[21] is not None:
                competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[17]), int(response[18]), int(response[19]), int(response[20])])]
                competitor_dict[response[1]]['workingStyle'].append(response[21].split(','))
            else:
                competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[17]), int(response[18]), int(response[19]), int(response[20])])]

        elif response[1] in competitor_dict and response[2] == 'No':
            try:
                competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[8]), int(response[9]), int(response[10]), int(response[11])])]
                competitor_dict[response[1]]['workingStyle'].append(response[13].split(','))
                competitor_dict[response[1]]['ocean'] = [int(response[3]), int(response[4]), int(response[5]), int(response[6]), int(response[7])]
                competitor_dict[response[1]]['workExperience'] = response[12].split(',')
                competitor_dict[response[1]]['workingStyle'] = response[13].split(',')
                competitor_dict[response[1]]['developmentGoals'] = response[14].split(',')
                competitor_dict[response[1]]['notableCompetitions'] = response[15].split(',')
                competitor_dict[response[1]]['year'] = get_grad_year(response[1])
                competitor_dict[response[1]]['headshot'] = ''
                competitor_dict[response[1]]['researchSubject'] = response[16]
            # else:
            #     competitor_dict[response[1]]['skills'] = [mean(i) for i in zip(competitor_dict[response[1]]['skills'],[int(response[8]), int(response[9]), int(response[10]), int(response[11])])]
            #     competitor_dict[response[1]]['workingStyle'].append(response[13].split(','))
            #     competitor_dict[response[1]]['ocean'] = [int(response[3]), int(response[4]), int(response[5]), int(response[6]), int(response[7])]
            #     competitor_dict[response[1]]['workExperience'] = response[12].split(',')
            #     competitor_dict[response[1]]['workingStyle'] = response[13].split(',')
            #     # competitor_dict[response[1]]['developmentGoals'] = ['']
            #     competitor_dict[response[1]]['notableCompetitions'] = response[15].split(',')
            #     competitor_dict[response[1]]['year'] = get_grad_year(response[1])
            #     competitor_dict[response[1]]['headshot'] = ''
            #     competitor_dict[response[1]]['researchSubject'] = response[16]
            except:
                print(response[1])


    return competitor_dict

if '__main__' == __name__:
    print(make_competitor_dictionary())
    # print(get_grad_year('Michael Dawes'))
    # pass