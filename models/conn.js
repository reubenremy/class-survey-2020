const pgp = require('pg-promise')({
    query: e => {
        // console.log("QUERY:", e.query);
    }
})

const options = {
    host:'drona.db.elephantsql.com',
    database:'rjdzavgu',
    user: 'rjdzavgu',
    password: 'tOYB4C35JloYeOs2D-gcV15T-XIaX3E2'
}

const db = pgp(options);

module.exports = db;