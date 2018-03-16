from Levenshtein import ratio
import pandas as pd
import csv
import json
import io
import traceback

output_file = io.open('nearby_all_course_desc_twitter.csv', mode="w", encoding="utf-8")
data_file = io.open('nearby_all_course_desc.json', mode="r", encoding="utf-8")
data_lines = data_file.readlines()

handles_file = pd.read_csv('twitterHandles/handles.csv', encoding='utf-8')
handles_names = handles_file['name']
handles_twitter_id = handles_file['twitter_id']
handles_twitter_handle = handles_file['twitter_handle']

for data_key,data_line in enumerate(data_lines):
  max_match = -1
  json_line = json.loads(data_line, 'UTF-8')
  best_handle = ''
  best_twitter_id = ''
  data_name = json_line['school']['name']
  max_handle_index = -1
  json_line['school']['twitter_handle'] = best_handle
  json_line['school']['twitter_id'] = best_twitter_id
  try:
    for handle_key,handle_name in enumerate(handles_names):
      current_ratio = ratio(unicode(data_name), unicode(handle_name))
      if current_ratio > max_match and current_ratio > .9:
        max_match = current_ratio
        max_handle_index = handle_key
        best_handle = handles_twitter_handle[handle_key]
        best_twitter_id = handles_twitter_id[handle_key]
    json_line['school']['twitter_handle'] = best_handle
    json_line['school']['twitter_id'] = best_twitter_id

    output_file.write(unicode(json.dumps(json_line, encoding='UTF-8', ensure_ascii=False)) + "\n")

  except:
    traceback.print_exc()
    break
    pass

output_file.close()
data_file.close()
# data_file.to_csv('all_data.csv', index=False)
# https://collegescorecard.ed.gov/data/documentation/
# https://api.data.gov/ed/collegescorecard/v1/schools/?school.name=harvard&api_key=qR3KckkWfgmQufXsJIjyIL9SkKm9gSHg3bZ6lytX
# https://www.nearbycolleges.info/api/autocomplete?q=&limit=500
# https://api.data.gov/ed/collegescorecard
# https://api.data.gov/ed/collegescorecard
# https://collegescorecard.ed.gov/data/documentation/
# https://docs.nearbycolleges.info/
# https://catalog.data.gov/dataset/college-scorecard
# https://catalog.data.gov/dataset/college-scorecard/resource/2a7f670e-0799-436a-9394-df0a9b3ba7c5
