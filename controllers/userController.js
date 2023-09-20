const User = require("../models/User")

const userController = {
    registrar: async (req,res)=>{
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        try{
            await user.save()
        }catch(erro){
            res.send(erro).res.status(400)
        }

    },
    login:(req,res)=>{
        console.log("Login")
        res.send("Login")
    }
}





module.exports = userController