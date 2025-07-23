const express = require('express')
const app = express()
const port = 3000
const {z} = require("zod")

app.use(express.json())

app.get('/signup',async (req,res)=>{
    const {email,password} = req.query;
    try {
        const user = z.object({
            email: z.string().email(),
            password: z.string().min(8).max(30)
        }) 
        const isValid = user.safeParse({email,password});
        if(!isValid.success) return res.status(400).send("Credentials are invalid")
        res.status(200).send("Credentials are valid");
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
