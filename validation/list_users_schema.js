const joi = require('joi');

module.exports = {
    schema : joi.object().keys({
        page : joi.number().integer().required(),
        per_page: joi.number().integer().required(),
        total : joi.number().integer().required(),
        total_pages: joi.number().integer().required(),
        data : joi.array().items(joi.object({
            id: joi.number().integer().required(),
            first_name : joi.string().required(),
            last_name : joi.string().required(),
            avatar : joi.string().uri().required()
        }))
    })
}