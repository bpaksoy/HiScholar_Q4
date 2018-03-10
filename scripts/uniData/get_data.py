# import time
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.common.exceptions import TimeoutException

# def init_driver():
#     option = webdriver.ChromeOptions()
#     option.add_argument(" - incognito")
#     driver = webdriver.Chrome(chrome_options=option)
#     driver.wait = WebDriverWait(driver, 5)
#     return driver


# def lookup(driver, query):
#     driver.get("http://www.google.com")
#     try:
#         box = driver.wait.until(EC.presence_of_element_located(
#             (By.NAME, "q")))
#         button = driver.wait.until(EC.element_to_be_clickable(
#             (By.NAME, "btnK")))
#         box.send_keys(query)
#         button.click()
#     except TimeoutException:
#         print("Box or Button not found in google.com")


# if __name__ == "__main__":
#     driver = init_driver()
#     lookup(driver, "Selenium")
#     time.sleep(5)
#     driver.quit()
import requests
import json
import csv
import time


cookies = {
    'D_IID': 'C0051BFA-9055-3318-AB8C-E7C717CF9D19',
    'D_UID': '69AA2455-AAB7-3C2C-BB0E-14FB563F6654',
    'D_SID': '49.35.119.236:rSL7rXBqGlmfNBeyLA9EuPu+EGTcnW97shQ0pggsiuU',
    '__ats': '1520514723457',
    '_giq_lv': '1520514723458',
    '_ga': 'GA1.2.1114255598.1520514724',
    '_gid': 'GA1.2.1640963758.1520514724',
    '_gat': '1',
    '_gat_d': '1',
    '_test_cookie': '1',
    '_gqpv': '1',
    '__afct': 'on',
    '_gat_s': '1',
    '_ftbuptc': 'BSvkaZbymN76O9tOcwmsNRvlZv8Hrxq1',
    '_ftbuptcs': 'BSvkaZbymN76O9tOcwmsNRvlZv8Hrxq1',
    '__ybotb': '293b',
    '__ybotu': 'jeij7jn6296cl7zmod',
    '__ybotv': '1520514726450',
    '__ybots': 'jeij7jn7d1q54sxz9y.1.jeij7jn652aleq73d0.1',
    'D_ZID': '48DE50D7-BAF8-37E9-A295-AD26FF8ABD30',
    'D_ZUID': 'E88F00B6-B180-35AC-98BB-A1617B01FB3C',
    'D_HID': '278C633F-2D23-36C6-8A35-1AF23A75CE55',
    'OX_sd': '1',
    'OX_plg': 'pm',
    '__gads': 'ID=3090c4d9f3ddd8e9:T=1520514728:S=ALNI_MZ7xd8vZcN1LS65QQ6Bnu4vxB1cog',
    '_uetsid': '_uet4c48cc53',
    '__ybotc': 'http%3A//ads-adseast.yldbt.com/m/',
    '__ybotn': '1',
}

headers = {
    'Pragma': 'no-cache',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Cache-Control': 'no-cache',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'Referer': 'http://colleges.startclass.com/',
    'X-Distil-Ajax': 'wqyercyzzczb',
}


pages = 28
with open('all_data.csv', "ab") as csv_file:
  writer = csv.writer(csv_file, delimiter=',')
  title_row = ['name', 'graduation_rate', 'median_salary', 'student_faculty_ratio', 'students_with_aid', 'out_of_pocket_cost', 'startclass_rank', 'acceptance_rate', 'sat', 'address_short', 'tution', 'num_students', 'college_id', 'slug']
  writer.writerow(title_row)
  for page in range(0, pages):
    params = (
      ('_len', '100'),
      ('page', page + 1),
      ('app_id', '5307'),
      ('_sortfld', 'instnm'),
      ('_sortdir', 'ASC'),
      ('_fil[0][field]', 'is_closed'),
      ('_fil[0][operator]', '='),
      ('_fil[0][value]', '0'),
      ('_fil[0][permanent]', 'true'),
      ('fields[]', ['instnm', '_GC_main_srp', '_GC_rank', '_GC_money_sponsorship', '_GC_acceptance_rate_srp', '_GC_combined_tuition_srp', '_GC_test_scores_srp', 'grad150', 'md_earn_wne_p10', 'stufacr', 'anyaidp', 'np_avg', '_GC_mobile_srp', 'auto_ranks', 'acceptance_rate', 'sat_avg', 'location', 'chg2ay3', 'enrlt_total', 'enrlt_ug']),
      ('_', '1520514430574'),
    )


    response = requests.get('http://colleges.startclass.com/ajax_search_sponsored', headers=headers, params=params, cookies=cookies)
    print 'response', page + 1
    time.sleep(2)
    colleges = json.loads(response.text)['data']['data']
    print 'count', len(colleges)
    for college in colleges:
      name = college[0]
      graduation_rate =  college[7]['formatted'].encode('utf-8') if college[7] else ''
      median_salary = college[8]['formatted'].encode('utf-8') if college[8] else ''
      student_faculty_ratio = college[9]['formatted'].encode('utf-8') if college[9] else ''
      students_with_aid = college[10]['formatted'].encode('utf-8') if college[10] else ''
      out_of_pocket_cost = college[11]['formatted'].encode('utf-8') if college[11] else ''
      rank = college[13]['formatted'].encode('utf-8') if college[13] else ''
      acceptance_rate = college[14]['formatted'].encode('utf-8') if college[14] else ''
      sat = college[15]['formatted'].encode('utf-8') if college[15] else ''
      address_short = college[16].encode('utf-8')
      tution = college[15]['formatted'].encode('utf-8') if college[15] else ''
      num_students = college[18]['formatted'].encode('utf-8') if college[18] else ''
      college_id = college[20].encode('utf-8')
      slug = college[21].encode('utf-8')
      data_row = [name, graduation_rate, median_salary, student_faculty_ratio, students_with_aid, out_of_pocket_cost, rank, acceptance_rate, sat, address_short, tution, num_students, college_id, slug]
      print 'data_row',
      writer.writerow(data_row)
      # print 'College ', slug, 'Done!'

