import json

x = {
    "name":"John",
    "age":30,
    "city":"new york"
}

y = json.dumps(x)

print(y)