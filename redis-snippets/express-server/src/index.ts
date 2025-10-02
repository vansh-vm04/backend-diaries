import { createClient } from "redis";
import express from "express";

const client = createClient();

async function startServer(){
    try {
        await client.connect()
        console.log("CLient connected")
    } catch (error) {
        console.log(error)
    }
}

const app = express()
const port = 3000;

app.use(express.json())

app.post('/submit', async (req, res)=>{
    const {problemId, userId, code, language} = req.body;
    try {
        //store in db
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}));
        res.status(200).json({message:"Submitted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

app.listen(port, async ()=>{
    try {
        await startServer();
        console.log("Server connected")
    } catch (error) {
        console.log("Server not working")
    }
})