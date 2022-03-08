CREATE TABLE "Users" (
	"id"	INTEGER,
	"first_name"	TEXT,
	"last_name"	TEXT,
	"email"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE "Party" (
	"id"	INTEGER,
	"user"	INTEGER COLLATE UTF16CI,
	"date"	TEXT,
	"score"	INTEGER NOT NULL,
	FOREIGN KEY("user") REFERENCES "Users"("id"),
	PRIMARY KEY("id")
);


SELECT Users.first_name, Party.date, Party.score FROM Users;
SELECT Users.first_name, Party.date, Party.score FROM Users JOIN Party ON Users.id = Party.user; -- clausula on permite establecer condición. 