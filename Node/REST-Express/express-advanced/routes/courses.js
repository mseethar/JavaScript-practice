const express = require('express');
const router = express.Router();
const Joi = require('joi');  // A class is returned here.

const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' }
];

router.get('/', (req, res) => {
    res.send({items: courses, size: courses.length});
});

router.post('/', (req, res) => {
    // Validate the request
    const validationResult = validateCourse(req.body);
    // INFO: If the error property is present then the input did not match the expected schema
    // Don't do this. Refer put
    if (validationResult.error) {
        let errors = [];
        validationResult.error.details.forEach((detail) => {
            errors.push(detail.message);
        })
        res.status(400).send({ errors: errors });
        return;
    }
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(newCourse);
    res.status(201).send(newCourse);
});

router.put('/:id', (req, res) => {
//#region Validate request
    // Validate the request
    // Object destructuring. Instead of writing the returnValue.error we can just write { error }
    // TODO: Learn more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { error } = validateCourse(req.body);
    // INFO: If the error property is present then the input did not match the expected schema
    if (error) {
        let errors = [];
        error.details.forEach((detail) => {
            errors.push(detail.message);
        })
        res.status(400).send({ errors: errors });
        return;
    }
//#endregion
    // Lookup the course with ID
    // If not found return 404
    const course = courses.find( c => c.id === parseInt(req.params.id));
    // INFO: Important to return
    if(!course) return res.status(404).send({error: `The course with id ${req.params.id} is not found.`});
    
    // Update the course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});

router.delete('/:id', (req, res) => {
    // Find the course with id
    // If not found return 404
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send({error: `The course with id ${req.params.id} is not found.`});

    // Delete it
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return the deleted course back
    res.send(course);
});

function validateCourse(course) {
    // Validate the request.
    // If invalid return 400 Bad Request
    // INFO: Input validation
    const validationSchema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const validationResult = validationSchema.validate(course);
    // console.log(validationResult);
    // The validationResult may either contain error (in case of a validation failure)
    // or value.
    return validationResult;
}

router.get('/:id', (req, res) => {  // id is a route parameter
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send({error: `The course with id ${req.params.id} is not found.`})
    else res.send(course);
});

module.exports.basePath = '/api/courses';
module.exports.router = router;