const db = require('./conn'),
    q = db.any;

class ExecutiveList {
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        //Wrap in Try / Catch in case DB connection fails
        try {
            const res = await q('SELECT * FROM ceos;');
            return res;
        } catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }

    static async getById(id) {
        try {
            const res = await db.any(`SELECT * FROM ceos WHERE id = ${id}`)
            return res
        } catch(error) {
            console.error('ERROR:', error);
            return error;
        }
    }
};

module.exports = ExecutiveList;

