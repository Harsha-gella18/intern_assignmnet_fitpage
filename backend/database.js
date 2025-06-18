const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'rating_review_app'
});

// Test connection at startup
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('MySQL connected!');
    conn.release();
  } catch (err) {
    console.error('MySQL connection error:', err);
  }
})();

module.exports = pool;