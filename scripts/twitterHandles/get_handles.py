import twitter

api = twitter.Api(consumer_key='xyz',
  consumer_secret='xyz',
  access_token_key='xyz-xyz',
  access_token_secret='xyz'
)

response = api.GetListMembers(slug='us-colleges-universities', owner_screen_name='Stamats')

response = [[u.name.encode('utf-8'), u.screen_name.encode('utf-8')] for u in response]
for i in response:
  print i[0],',',i[1]


