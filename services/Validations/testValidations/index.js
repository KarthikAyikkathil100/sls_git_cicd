
const Helper = require('../../helper');
const {Joi} = require('@Validations/index.js')
module.exports = {
    addUpdateBonusValidation: (req, callback) => {
        const schema = Joi.object({
          id: Joi.number().required(),
          name: Joi.string().required()
        });
        const { error } = schema.validate(req);
        if (error) {
          return Helper.validationMessageKey("addUpdateBonusValidation", error)
        }
        return callback(true);
      },
}