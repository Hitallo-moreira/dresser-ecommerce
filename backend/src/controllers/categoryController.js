const { getAllCategories, addCategory, removeCategory } = require("../services/categoryService");

const getCategories = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Nome é obrigatório" });

    const newCategory = await addCategory(name);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await removeCategory(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, createCategory, deleteCategory };
