const express = require("express");
const app = express();
const router = express.Router();
app.use(express.static("public"));



app.listen(3000, () => {
    console.log("server on port 3000");
});




const mainRouter = require("./routers/main")


app.use("/", mainRouter);
app.use("/about", mainRouter);