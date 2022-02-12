const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserVaccineInfoSchema=new Schema({
    beneficiaryName:{
        type:String,
    },
    aadharNumber:{
        type:String,
    },
    age:{
        type:String,
    },
    gender:{
        type:String,
    },
    beneficiary_id:{
        type:String,
    },
    vaccineStatus:{
        type:String,
    },
    secretKey:{
        type:String,
    },
    vaccineDate:{
        type:Date,
    }
 
});

module.exports=userVaccineInfo=mongoose.model('userVaccineInfo',UserVaccineInfoSchema);