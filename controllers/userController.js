const userController = {
    registrar:(req,res)=>{
        console.log("Resgistrar")
        res.send("Resgistrado")
    },
    login:(req,res)=>{
        console.log("Login")
        res.send("Login")
    }
}





module.exports = userController