const mongoose = require("mongoose");

const url = "mongodb+srv://foodRecipe:food123@cluster0.pkqngbw.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connected")
})
.catch((e)=>{
    console.log(e);
})