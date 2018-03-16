import requests
import json
import time
from requests.utils import quote
import locale
import traceback
locale.setlocale( locale.LC_ALL, '' )
# response = requests.get('https://api.data.gov/ed/collegescorecard/v1/schools?api_key=qR3KckkWfgmQufXsJIjyIL9SkKm9gSHg3bZ6lytX')
# print json.dumps(json.loads(response.text), indent=4)

# Nearby colleges
# /77639964-a85f-43b3-8858-92c02d64952f

# degrees_awarded.highest
# ownership
# state_fips for state
# locale : city, suburb, town, Rural
# location.lat lat lon
# men_only
# women_only
# religious_affiliation
# admission_rate.overall

# sat_scores.midpoint.critical_reading
# sat_scores.midpoint.math
# sat_scores.midpoint.writing
# sat_scores.average.overall

# act_scores.midpoint.english
# act_scores.midpoint.math
# act_scores.midpoint.writing
# act_scores.midpoint.cumulative

# academics.program_percentage
# online_only
# school.operating
# avg_net_price.public
# avg_net_price.private
# title_iv.public.all
# title_iv.private.all
# ft_faculty_rate
# aid.federal_loan_rate
# student.share_25_older
# student.share_independent_students
# aid.loan_principal
# aid.median_debt.completers.overall
# grad_students

# file = open('nearby.json', 'r')
# content = file.read()
# content = content if content else "{}"

# result_dict = json.loads(content)
# file.close()
# file = open('nearby.json', 'w')
# response = requests.get('https://nearbycolleges.info/api/search?filter=enrollment.percentWomen:>0&key=77639964-a85f-43b3-8858-92c02d64952f')
# new_result = json.loads(response.text)
# print new_result
# already = 0
# not_in = 0
# for uni in new_result['result']:
#   if str(uni['unitid']) not in result_dict:
#     result_dict[str(uni['unitid'])] = str(uni['unitid'])
#     not_in+=1
#   else :
#     already += 1
# file.write('')
# file.write(json.dumps(result_dict))
# print already,not_in

###################### FETCH and save JSON ######################

# file = open('nearby.json', 'r')
# all_data_file = open('nearby_all.json', 'a')
# content = file.read()
# result_dict = json.loads(content)
# ids = result_dict.keys();
# for index,id in enumerate(ids):
#   try:
#     response = requests.get('https://www.nearbycolleges.info/api/everything/'+id)
#     new_result = json.loads(response.text)
#     result = new_result['result']
#     print index
#     all_data_file.write(json.dumps(result) + "\n")
#     time.sleep(1)
#   except:
#     print index,id
# file.close()
# all_data_file.close()


#################### Populate description fields ###################
# file = open('nearby_all.json', 'r')
# output_file = open('nearby_all_desc.json', 'w')

# lines = file.readlines()
# for key,line in enumerate(lines):
#   try:
#     data = json.loads(line)
#     data['school']['description'] = data['school']["name"] + ' is a ' + data['school']['control'] + ' institution with total undergraduate enrollment of ' + str("{:,}".format(( data['enrollment']['undergradTotal'])))
#     output_file.write(json.dumps(data) + "\n")
#   except Exception,e:
#     print e

# output_file.close()
# file.close()

################### Populate courses #############################
course_query = [
  "communication",
  "personal_culinary",
  "business_marketing",
  "library",
  "engineering",
  "computer",
  "theology_religious_vocation",
  "multidiscipline",
  "education",
  "agriculture",
  "mechanic_repair_technology",
  "parks_recreation_fitness",
  "psychology",
  "humanities",
  "legal",
  "health",
  "social_science",
  "family_consumer_science",
  "mathematics",
  "security_law_enforcement",
  "resources",
  "transportation",
  "precision_production",
  "communications_technology",
  "construction",
  "engineering_technology",
  "biological",
  "philosophy_religious",
  "language",
  "visual_performing",
  "physical_science",
  "ethnic_cultural_gender",
  "science_technology",
  "architecture",
  "public_administration_social_service",
  "english",
  "military",
  "history"
]
prefix = "2015.academics.program_percentage."
path_array = [prefix + x for x in course_query]
path_query = ','.join(path_array)

file = open('nearby_all_desc.json', 'r')
output_file = open('nearby_all_course_desc.json', 'a')

lines = file.readlines()
lines = lines[195:196]
for key,line in enumerate(lines):
  try:
    data = json.loads(line)
    url = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name="+unicode(quote(data['school']["name"]))+"&api_key=ISGBN3yTI4oTVfjUT5UyCAHnlvvzYf2N5PHDGeib&fields="+path_query
    response = requests.get(url)
    print response.text,data
    uni = json.loads(response.text)['results']
    if len(uni):
      data['school']['courses'] = [k.split('.')[-1] for k in uni[0].keys() if uni[0][k] != 0]
    else:
      data['school']['courses'] = []
    # print data
    output_file.write(json.dumps(data) + "\n")
    time.sleep(.4)
    print key
  except Exception,e:
    traceback.print_exc()
    break

output_file.close()
file.close()
