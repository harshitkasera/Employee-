const useModel = require("../model/useModel")
const bcrypt = require("bcrypt")                        // ye library password ko hash krne mai use hoti hai
const jwt = require("jsonwebtoken")                     // ye library humare token ko generate karti hai
const saveUser = async (req, res)=>{                    // Function :- ye isliye create kiya hai kyuki req.body se client ka diya hua (name , email, password)milta hai
    const {name, email, password}= req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10) //ye bycrypt se password ko hash kar rha hai or 10 is lenght in our password
        const newUser = new useModel({                         // userModel se liya gya hai jaha humne schema create kiya
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();                                        //save() method user ko MongoDB me insert karta hai.
        res.status(201).json({message:"user registered successfully"});  // agr sb kuch thik h to message succesfuly print hojayega
    }
    catch (error){
        res.status(500).json({message:"Somehting went wrong",error: error.message}); // ye error ko catck karega
    }
};

const loginUser = async (req,res)=>{
    const {email, password} = req.body;

    try{
        const user = await  useModel.findOne ({email});

        if(!user){
            alert("user not found")
            return res.status(404).json ({message: "User not found"})
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        
        if(!comparePassword){
            alert("incorect password")

            return res.status(401).json({message: "Incorrect password"})
        }

        const token = jwt.sign({id: user._id, email: user.email}, "Our_secrate_key", {expiresIn:"1d"})
        return res.status(200).json({message: "Loginn successful", user, "token":token});
    }
    catch (err){
        alert("Login failed")
        return res.status(500).json({message: "Login failed", error: err.message})
    }
}

module.exports = {saveUser, loginUser} // ise hum userRoutes mai import kardege