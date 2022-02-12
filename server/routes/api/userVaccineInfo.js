const express = require("express");
const router = express.Router();

const userVaccineInfo = require("../../models/userVaccineInfo");

router.get("/vaccineInfo", (req, res) => {
  userVaccineInfo
    .find()
    .sort({ date: -1 })
    .then((user) => res.json(user));
});

router.post("/vaccineInfo", (req, res) => {
  var newVaccineData = new userVaccineInfo({
    beneficiaryName: req.body.beneficiaryName,
    aadharNumber: req.body.aadharNumber,
    age: req.body.age,
    gender: req.body.gender,
    beneficiary_id: req.body.beneficiary_id,
    vaccineStatus: req.body.vaccineStatus,
    secretKey: req.body.secretKey,
  });

  newVaccineData.save().then((item) => res.json(item));
});

// router.delete('/:id',(req,res)=>{
//     console.log(req.params.id);
//     Items.findById(req.params.id)
//     .then(item=>item.remove().then(()=>res.json({sucess:true}))).catch(err=>console.log(err));
// });

module.exports = router;
