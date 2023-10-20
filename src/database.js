"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3 = require("sqlite3");
// Connect to the database
var db = new sqlite3.Database('roomease.db');
// Create a users table if it doesn't exist
db.run("\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    username TEXT NOT NULL,\n    password TEXT NOT NULL\n  )\n");
exports.default = db;
