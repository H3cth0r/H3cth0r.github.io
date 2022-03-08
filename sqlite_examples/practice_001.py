import email
from lib2to3.pytree import Node
import sqlite3
import string

# mydb = sqlite3.connect("reto_PAS.db") # connecting to db
# email = str(input("Introduce email: "))
# cur = mydb.cursor() # creating cursor

# stringSQL  = "SELECT id, first_name, last_name, email FROM Users"
# # stirngSQL = "SELECT id, first_name, last_name, email FROM Users"

# rows = cur.execute(stringSQL)

# for r in rows:
#     print(f"{r[0]}|\t{ r[1]}|\t{r[2]}|\t {r[3]}")

# jorge = '''SELECT id, first_name, last_name, email FROM Users WHERE email= ?'''
# jorge_result = cur.execute(jorge, (email,))

# for r in jorge_result:
#     print(r[0], r[1], r[2], r[3])

# mydb.close()


mydb = sqlite3.connect("reto_PAS.db")
email = str(input("email: "))
cur = mydb.cursor()

stringSQL = '''SELECT id, first_name, last_name, email FROM Users WHERE email = ?''' 

result = cur.execute(stringSQL, (email,))
result_one = result
res = result.fetchone()
if res == None:
    print("not found")
    exit()
print(res[0], res[1], res[2], res[3])