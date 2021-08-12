import requests
data={
    "name":"Joe Dalton",
    "email":"joe.dalton@gmail.com",
    "phone_number":"0102030405",
    "password":"password"
}
r = requests.post('http://localhost:4000/user/register',data)
print(r)

