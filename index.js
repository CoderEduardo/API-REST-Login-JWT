const express = require("express")
const app = express()
const PORTA = 8080
const userRouter = require("./routes/userRouter")
const adminRouter = require("./routes/adminRouter")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const mongoose = require("mongoose")
const URL = "mongodb://127.0.0.1/teste"

mongoose.connect(URL).then(()=>{
    console.log("Banco de dados conectado com sucesso")
}).catch(erro=>{
    console.log(`Falha ao se conectar: ${erro}`)
})

app.use("/",userRouter)
app.use("/",adminRouter)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})