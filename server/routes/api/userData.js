const express=require('express');
const router=express.Router();

const userData=require('../../models/userData');

router.get('/',(req,res)=>{
    userData.find()
    .sort({date : -1})
    .then(user=>res.json(user));
});

router.post('/',(req,res)=>{
    var newUser=new userData({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
    });
    

    newUser.save().then(item=>res.json(item));
});


// router.delete('/:id',(req,res)=>{
//     console.log(req.params.id);
//     Items.findById(req.params.id)
//     .then(item=>item.remove().then(()=>res.json({sucess:true}))).catch(err=>console.log(err));
// });


module.exports=router;