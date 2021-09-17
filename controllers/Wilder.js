const WilderModel = require("../models/Wilder")

module.exports = {
  //CREATE
  create: async(req,res) => {
    console.log(req.body);
    try{
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();

        res.json({ success: true, result: result });
    } catch(err)  {
        res.json({ success: false, result: err });
       }
  },

  //READ

  read : async(req,res) =>{
    try{
      const result = await WilderModel.find()
      res.json({ success: true, result: result})
    }catch(err)  {
      res.json({ success: false, result: err });
     }
  },

  // UPDATE
  update: async(req, res) => {
    try{
      const result = await WilderModel.update({_id: req.body._id}, req.body)
      
      res.json({success: true, result: result})
    } catch(err){
          res.json({ success: false, result: err})
    }
  
    },

  //DELETE
  delete: async (req, res) => {
    try{
      const result = await  WilderModel.remove({ _id: req.body._id},req.body)
        res.json({ success: true, result: result })
    } catch(err){
      res.json({ success: false, result: err})
  }
  }

}
