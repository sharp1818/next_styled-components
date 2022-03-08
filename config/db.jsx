import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123caca15',
    port: 3306,
    database: 'products',
})

export {pool};