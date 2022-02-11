const express=require('express');
const router=express.Router();

const Items=require('../../models/Items');

router.get('/',(req,res)=>{
    Items.find()
    .sort({date : -1})
    .then(item=>res.json(item));
});

router.post('/',(req,res)=>{
    var newItem=new Items({
        name : req.body.name
    });

    newItem.save().then(item=>res.json(item));
});


router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    Items.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({sucess:true}))).catch(err=>console.log(err));
});


module.exports=router;