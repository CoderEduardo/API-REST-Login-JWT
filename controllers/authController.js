const jwt = require("jsonwebtoken")

const secret = "banana"

const auth = function (req, res, next) {
    const token = req.header("auth-token")
    if (!token) return res.status(400).send("ACESSO NEGADO")

    try {
        const verificarUsuario = jwt.verify(token, secret)
        req.usuario = verificarUsuario
        next()
    } catch (erro) {
        if (!token) return res.status(400).send("ACESSO NEGADO")
    }
}

module.exports = auth