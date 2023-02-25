const mongoose=require("mongoose")
const Schema=mongoose.Schema

const RecipesSchema = new Schema({
    reipe_title:{
        type:String,
    },
    Author:{
        type:String
    },
    Instructions:[{
        type:String
    }],
    Ingredients:[{
        type:String
    }],
    description:{
        type:String
    }
})

const RecipesModel = mongoose.model("Recipes", RecipesSchema);

module.exports = RecipesModel;