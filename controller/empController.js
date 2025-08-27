const emp = require("../model/empModel")

const addEmp = async (req,res)=>{
try {
      const {name,age,city,mobile,salary} = req.body

    const Newemp = emp({
        name,
        age,
        salary,
        city,
        mobile
    })

    await  Newemp.save()     //save to DB
    res.status(200).json({message:"emp add successfully"});
} catch (error) {
 res.status(500).json({message:"emp not add",error: error.message});   
}
}


const viewAllEmp = async (req , res) =>{
    try{
    const allemp = await emp.find()      //emp.find()se sare record fetch hore h
    res.status(200).json({employ:allemp});
    }catch(err){
        res.status(200).json({error:err});
    }
}


const updateEmp = async (req,res)=>{
    try {
        const {id} = req.params       // isse hume id milti hai
        const {name , age , city, mobile,salary} = req.body

        const newEmp = await emp.findByIdAndUpdate(id,{    //findByIdAndUpdate se document update hota hai.
            name,
            age,
            city,
            salary,
            mobile
        },{new:true}) //is ka matlb updated document return kare
         res.status(200).json({message:"Emp Update Sucessfully","newEmp":newEmp});
    } catch (error) {
        res.status(500).json({message:"Emp Not Update","error":error.message});
    }
}


const deletEmp = async (req,res)=>{
    try {
      const {id} = req.params   // ID se employee find karke delete har rha h
      await emp.findByIdAndDelete(id)
      res.status(200).json({message:"Emp Deleate Sucessfully"});
    } catch (error) {
        res.status(500).json({message:error});
    }
}



module.exports={addEmp , viewAllEmp , updateEmp ,deletEmp}