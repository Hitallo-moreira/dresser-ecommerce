const sql = require("../config/database");

const getAllCategories = async () => {
  const categories = await sql`SELECT id, name, slug FROM categories ORDER BY id ASC`;
  console.log(categories);
  return categories;
};

const addCategory = async (name) => {
  return await sql`INSERT INTO categories (name) VALUES (${name}) RETURNING *`;
};

const removeCategory = async (id) => {
  return await sql`DELETE FROM categories WHERE id = ${id}`;
};

module.exports = { getAllCategories, addCategory, removeCategory };
