const db = require('./conn');

class ClassInfo {
    constructor(id, name, rank) {
        this.id = id;
        this.name = name;
        this.rank = rank;
    }

    static async getAllTopics() {
        try {
            const response = await db.any(
            `SELECT 
            topics.id,
            topics.topic_name,
            rankings.rank_name
	        FROM topics
	        INNER JOIN rankings
	        ON topics.rank_id = rankings.id;
            `);
            console.log('ALL SHIT', response);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async getAllRanks() {
        try {
            const response = await db.any('SELECT * FROM rankings ORDER BY rank;')
            return response;
        } catch (error) {
            return error.message;
        }
    }

    static async update(topic, rank) {
        try {
            const response = await db.result(`UPDATE topics SET rank_id=${rank} WHERE topic_name='${topic}';`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ClassInfo;