const express = require("express");
const mongoose = require("mongoose");

const authRouter=require("./routes/auth");



//init
const PORT=3000;
const app = express();
const DB = "mongodb+srv://Noriah:test1234@cluster0.zizvslh.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json())
app.use(authRouter);


//connections
mongoose.connect(DB).then(() => {
    console.log("connection successful");
})
.catch((e) => {
    console.log(e)
})



app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port: ${PORT}`);

});