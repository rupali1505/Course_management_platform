const Joi = require("joi");

const courseSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .required(),

    description: Joi.string()
        .trim()
        .min(10)
        .required(),

    category: Joi.string()
        .trim()
        .required(),

    price: Joi.number()
        .min(0)
        .required(),

    thumbnail: Joi.string()
        .allow("")
});

const updateCourseSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(3),

    description: Joi.string()
        .trim()
        .min(10),

    category: Joi.string()
        .trim(),

    price: Joi.number()
        .min(0),

    thumbnail: Joi.string()
        .allow("")
});


module.exports = {
    courseSchema,
    updateCourseSchema
};