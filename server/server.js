const express =require("express");
const bodyParser =require("body-parser");
const mongoose=require('mongoose');
const userData=require('./routes/api/userData');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT||5000;
const MongoURI=require('./config/keys').mongoURI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

mongoose.connect(MongoURI)
.then(()=>console.log('MongoDB Connected ...'))
.catch((err)=>console.log(err));

app.use('/api/userData',userData);
app.use(cors());


app.listen(PORT,()=>{
    console.log(`App listening on PORT ${PORT}`)
})

