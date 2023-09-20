const User = require("../models/User")
const bcrypt = require("bcryptjs")

const userController = {
    registrar: async (req,res)=>{

        let verificarEmail = await User.findOne({email:req.body.email})
        if(verificarEmail) return res.status(400).send("Esse email já está cadastrado")

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password)
        })

        try{
            let saveUser = await user.save()
            res.send(saveUser)
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