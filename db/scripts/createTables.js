const { query } = require('../index.js');

async function createUsersTable() {
  let res = await query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT,
    personality TEXT,
    start_date TEXT,
    points INTEGER
)`);
  console.log(res);
}

async function createPostsTable() {
  let res = await query(`CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE ,
      text TEXT,
      image TEXT,
      video TEXT,
      audio TEXT,
      date DATE,
      favorite BOOLEAN
  )`);
  console.log(res);
}

async function createMoodsTable() {
  let res = await query(`CREATE TABLE moods (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER REFERENCES users (id) ON DELETE CASCADE NOT NULL,
      mood INTEGER,
      date DATE
  )`);
  console.log(res);
}

async function createTrophiesTable() {
  let res = await query(`CREATE TABLE trophies (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users (id) ON DELETE CASCADE NOT NULL,
      trophy_name TEXT,
      trophy_img TEXT,
      awarded BOOLEAN
  )`);
  console.log(res);
}

async function createQuotesTable() {
  let res = await query(`CREATE TABLE quotes (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER REFERENCES users (id) ON DELETE CASCADE NOT NULL, 
      quote TEXT
  )`);
  console.log(res);
}

async function createNotificationsTable() {
  let res = await query(`CREATE TABLE notifications (
      id SERIAL PRIMARY KEY NOT NULL,
      user_id INTEGER REFERENCES users (id) ON DELETE CASCADE NOT NULL,
      notification TEXT
  )`);
  console.log(res);
}

const createAllTables = async () => {
  await createUsersTable();
  console.log('users created');
  await createPostsTable();
  console.log('posts created');
  await createMoodsTable();
  console.log('moods created');
  await createTrophiesTable();
  await createQuotesTable();
  await createNotificationsTable();
  console.log('Tables should be created now.');
};

module.exports = { createAllTables };

// The code inside if block shouldn't run if we're requiring this file somewhere.
if (require.main === module) {
  createAllTables();
}
