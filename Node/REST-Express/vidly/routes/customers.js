const { Customer, validate } = require('../models/customers');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    res.send(customer);
});

router.post('/', async (req, res) => {
    const customer = req.body;
    const validationResult = validate(customer);
    if (validationResult.error) {
        const errors = validationResult.error.details.map( detail => detail.message );
        res.status(400).send( { errors: errors } );
    } else {
        // INFO: Can create a Customer model object and call the save function on it
        const customerDB = await Customer.create(customer);
        res.send(customerDB);
    }
});

module.exports = router;
