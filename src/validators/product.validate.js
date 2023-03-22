import Joi from "joi";

export const ProductValidate = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string(),
        status: Joi.boolean(),
        quality: Joi.number(),
    });

    try {
        
        const result = schema.validate(req.body);
    
        // console.log(result)
    
        if (result.error) {
            return res.json({ error: 1, message: result.error.details[0].message });
        }
        next();
    } catch (error) {
        console.log(error)
    }

};

