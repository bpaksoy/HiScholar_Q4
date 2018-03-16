
# import requests
# import json
# import csv
# import time
# from bs4 import BeautifulSoup
# import pandas as pd
# import csv
# import re
# import uuid


# session = requests.session()
# data_file = pd.read_csv('all_data.csv')
# college_slugs = data_file['slug']
# college_ids = data_file['college_id']
# fields_of_study = []

# for key,college_id in enumerate(college_ids):
#   uni_page = 'http://colleges.startclass.com/l/'+college_id+'/'+college_slugs[key];
#   res = session.get(uni_page)
#   print res.cookies;
#   for cookie in res.cookies
#   :
#     print cookie

#   # soup = BeautifulSoup(courses_req.text, 'html.parser')
#   # majors = soup.findAll('div',{'class' : 'srp-table-div'})
#   # majors = majors[1].findAll('a') if len(majors) else [];
#   # majors = [major.text for major in majors]
#   # print majors
#   # fields_of_study.append(''.join(majors))
#   time.sleep(2)

# data_file['fields_of_study'] = fields_of_study
# data_file.to_csv('data_with_course.csv', index=False)

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Specifying incognito mode as you launch your browser[OPTIONAL]
option = webdriver.ChromeOptions()
option.add_argument("--incognito")

# Create new Instance of Chrome in incognito mode
browser = webdriver.Chrome(chrome_options=option)

# Go to desired website
browser.get("http://colleges.startclass.com/l/1929/Harvard-University")

# Wait 20 seconds for page to load
timeout = 20
try:
    # Wait until the final element [Avatar link] is loaded.
    # Assumption: If Avatar link is loaded, the whole page would be relatively loaded because it is among
    # the last things to be loaded.
    WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//div[@class='srp-table-div']")))
except TimeoutException:
    print("Timed out waiting for page to load")
    browser.quit()

# Get all of the titles for the pinned repositories
# We are not just getting pure titles but we are getting a selenium object
# with selenium elements of the titles.

# find_elements_by_xpath - Returns an array of selenium objects.
titles_element = browser.find_elements_by_xpath("//div[@class='srp-table-div']")

# List Comprehension to get the actual repo titles and not the selenium objects.
titles = [x.text for x in titles_element]

# print response in terminal
print('TITLES:')
print(titles, '\n')


# # Get all of the pinned repo languages
# language_element = browser.find_elements_by_xpath("//p[@class='mb-0 f6 text-gray']")
# languages = [x.text for x in language_element] # same concept as for-loop/ list-comprehension above.

# # print response in terminal
# print("LANGUAGES:")
# print(languages, '\n')

# # Pair each title with its corresponding language using zip function and print each pair
# for title, language in zip(titles, languages):
#     print("RepoName : Language")
#     print(title + ": " + language, '\n')
