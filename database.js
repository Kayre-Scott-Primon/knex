var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'mySQL_24',
        database: 'knex.js'
    }
});

module.exports = knex;