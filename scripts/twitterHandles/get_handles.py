import twitter
import csv
api = twitter.Api(consumer_key='BDiCCviQRZcUAAcrxrWuvqelf', consumer_secret='1IPFKS5B5TOJPc2lv4MsUyIVpBpb0aRV2IFbKwGRipmdbnIlP4', access_token_key='2173922899-dNEgemtgnZPkjA7AnyMpsFRlZrXOqeAN8JcVvBI', access_token_secret='JCkUOwkrLYU4HZSVt3IZJlZasfhGYT8ywAkOKkO8qFkH8' )

response = api.GetListMembers(slug='us-colleges-universities', owner_screen_name='Stamats')

response = [[u.name.encode('utf-8'), u.screen_name.encode('utf-8'), u.id] for u in response]
with open('handles.csv', 'w') as file:
  writer = csv.writer(file)
  for i in response:
    row = [i[0],i[1],i[2]]
    writer.writerow(row)

