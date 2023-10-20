import * as sqlite3 from 'sqlite3';

// Connect to the database
const db = new sqlite3.Database('roomease.db');

// Create a users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

export default db;
