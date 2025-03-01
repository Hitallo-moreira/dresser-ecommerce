const express = require("express");
const cors = require('cors');
const categoriesRoutes = require("./routes/categories");
// const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.json());
app.use("/categories", categoriesRoutes);
// app.use(errorHandler);

module.exports = app;
