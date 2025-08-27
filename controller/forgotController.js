const  useModel = require('../model/useModel')
const jwt = require('jsonwebtoken')
const  bcrypt = require('bcrypt')

const forgotPassword = async(req, res)=>{
    const {email} = req.body;

    try{
        const user  = await useModel.findOne({email})
        if(!user) return res.status(404).json({message: 'user not found'})

            const token = jwt.sign({id: user._id}, 'your_reset_secret', {expiresIn:'5m'})

            const link = `${token}`

            const html = `<p>Click below to reset your password : </p><a href='${link}'>${link}</a>`

            await sendEmail(email, 'Reset your Password', html)

            return res.status(200).json({message: 'Reset link sent to your email'})
    }

    catch(error){
            return res.status(500).json({message: 'Error sending reset link', error: error.message})
    }
}

const resetPassword = async (req, res)=>{
    const {token} =req.params;
    const {newPassword, confirmPassword} = req.body

    if(newPassword !== confirmPassword){
        return res.status(400).json({message: 'password do not match'})
    }

    try{
        const decoded = jwt.verify(token, 'your_reset_secret')
        const user = await useModel.findById(decoded.id)

        if(!user) return res.status(404).json({message: 'user not found'})

            const hashed = await bcrypt.hash(newPassword, 10)
            user.password = hashed
            await user.save()

            return res.status(200).json({message: 'password updated successfully'})
    }
    catch (error){
        return res.status(400).json({message: error.message})
    }
}

module.exports = {resetPassword, forgotPassword}