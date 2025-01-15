const DatabasePostgres = require('../../database/database-postgres');

const db = new DatabasePostgres();
module.exports = async function handler(req, res) {
    try {
        const categories = await db.getCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching categories' });
    }
}