const express=require('express')

const app=express()

const PORT=process.env.PORT||4000

app.get('/', (req, res) =>{
    res.status(200).send({message:"Hello!"})
})

app.listen(PORT, (req, res) =>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})