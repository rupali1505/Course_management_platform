const Joi = require("joi");

const lessonSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .required(),

    description: Joi.string()
        .trim()
        .min(10)
        .required(),

    videoUrl: Joi.string()
        .uri()
        .required(),

    order: Joi.number()
        .integer()
        .min(1)
        .required()
});

module.exports = {
    lessonSchema
};