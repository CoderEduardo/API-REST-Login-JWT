const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const secret = "banana"

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
    login: async (req,res)=>{
        //Verificando se o email existe
        let usuario = await User.findOne({email:req.body.email})
        if(!usuario) return res.status(400).send("Email ou senha incorretos")

        //Verifica se a senha está correta
        const verificarSenha = bcrypt.compareSync(req.body.password,usuario.password)

        if(!verificarSenha) return res.status(400).send("Email ou senha incorretos")

        const token = jwt.sign({id:usuario.id},secret)
        res.header('auth-token',token)

        res.send("Usuário logado")
    }
}






module.exports = userController