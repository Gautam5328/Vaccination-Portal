const express =require("express");
const bodyParser =require("body-parser");
const mongoose=require('mongoose');
const items=require('./routes/api/items');

const app=express();
const PORT=process.env.PORT||5000;
const MongoURI=require('./config/keys').mongoURI;

mongoose.connect(MongoURI)
.then(()=>console.log('MongoDB Connected ...'))
.catch((err)=>console.log(err));

app.use(bodyParser.json());
app.use('/api/items',items);



app.listen(PORT,()=>{
    console.log(`App listening on PORT ${PORT}`)
})

