const express = require("express")
const app = express()
const PORTA = 8080
const userRouter = require("./routes/userRouter")

app.use("/",userRouter)

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: ${PORTA}`)
})