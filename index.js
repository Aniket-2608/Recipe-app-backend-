const express = require("express");
const app = express();
const userRoute = require("./userRoutes");
const Recipes = require("./RecipesRouter");
// const cors = require("cors");
require("./db");
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(userRoute);
app.use(Recipes);
// app.use(cors);


app.listen(5000, ()=>{
    console.log("Server is running at 5000")});