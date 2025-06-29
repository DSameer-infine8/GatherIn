const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const app = express();

dotenv.config();
const PORT = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/api/chat", (req,res)=>{
    res.send(chats);
});

app.get("/api/chat/:id", (req,res)=>{
    const id = req.params.id;
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}}`);
})