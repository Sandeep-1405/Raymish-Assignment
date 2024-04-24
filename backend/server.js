const express = require("express");
const cors = require("cors");
const connectDb = require("./db.js");
const eventModel = require("./models/event.js")

const app = express();
app.use(express.json())
app.use(cors())

connectDb();

app.get('/',async(req,res)=>{
    const response = await eventModel.find()
    return res.json(response)
})

app.post('/create', async(req,res)=>{
    const {name,description,website,instagramLink,googleMapsLink,locality,city,category} = req.body
    const response = await eventModel(req.body)
    await response.save()
    return res.send({data:response})
})

app.put("/update",async(req,res)=>{
    const response = await eventModel.updateOne(req.body)
    await response.save()
    return res.json(response)
})

app.delete('/delete',async(req,res)=>{
    const query = {_id:req.params}
    console.log(query)
    const response = await eventModel.deleteOne(query)
    await response.save()
    return res.json()
})

app.listen(3000,()=>{
    console.log(`Server Running at http://localhost:3000/`)
})
