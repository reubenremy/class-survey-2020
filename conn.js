const credentials = {
    host: 'rajje.db.elephantsql.com',
    database: 'ohhdjrvp',
    user: 'ohhdjrvp',
    password: 'H5qkuqkn0ACVHaiGZyunDrs6jdSfbr4M'
}

const pgp = require('pg-promise')
({
    query: e => { console.log('QUERY:', e.query); }
});

const db = pgp(credentials);

module.exports = db;