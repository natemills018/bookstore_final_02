import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    database: 'bookstore_final_02',
    user:'bookstore_user_2',
    password:'password123'
})

export default pool;