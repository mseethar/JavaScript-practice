const Joi = require('joi');
const customerSchema = Joi.object({
    isGold: Joi.boolean().required(),
    name: Joi.string().min(2).max(50),
    phone: Joi.string().min(5).max(15)
});

const mongoose = require('mongoose');
const customerDBSchema = mongoose.Schema({
    isGold: Boolean,
    name: String,
    phone: String
});
const Customer = mongoose.model('Customer', customerDBSchema);

function validateCustomer(customer) {
    return customerSchema.validate(customer);
}

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;
