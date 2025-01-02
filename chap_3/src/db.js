import {DatabaseSync} from 'node:sqlite';

const db = new DatabaseSync(':memory:');//not what youll use in a production db

//Execute SQL statement from strings
db.exec(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
    `)
db.exec(`
    CREATE TABLE todos(
    id INTERGER PRIMARY KEY AUTOINCREMENT,
    user_id INTERGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FORIEGN KEY(user_id) REFERENCE users(id)
    )
    `)

    export default db