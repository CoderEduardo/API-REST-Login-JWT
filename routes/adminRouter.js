const express = require("express")
const router = express.Router()
const auth = require("../controllers/authController")

router.get("/admin",auth,(req,res)=>{

    if(req.usuario.admin){
        res.send("Essa rota só pode ser acessa com autorização")
    }else{
        res.status(401).send('Acesso negado')
    }
    
})

module.exports = router