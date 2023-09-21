const Joi = require("@hapi/joi")

const registroUsuario = (data) => {

    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(3).max(50)
    })

    return schema.validate(data)

}

const loginUsuario = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(50)
    })

    return schema.validate(data)
}

module.exports.registroUsuario = registroUsuario
module.exports.loginUsuario = loginUsuario