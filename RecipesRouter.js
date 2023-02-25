const express=require("express")
const RecipesModel =require("./Models/recipes");

const router=express.Router()


router.post("/recipes-post", async (req, res) => {
    try {
      let user = await RecipesModel.create({
        reipe_title: req.body.reipe_title,
        Author: req.body.Author,
        Instructions:req.body.Instructions,
        Ingredients:req.body.Ingredients,
        description:req.body.description
      });
      // save user details in mongodb

      res.status(200)
        .json({
          user
        });
    } catch (err) {
      console.log(err);
    }
  });

 router.get("/recipes-post", async (req, res) => {
    try {
      let user = await Post.find(req.body.id);
      if (!user)
        res.status(404)
        .send({
          message: "User not found!"
        });
      res.send({
        user
      })
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router