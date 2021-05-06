const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-excercises', { useNewUrlParser: true }, () => console.log('Connected to mongodb...'));

const courseSchema = mongoose.Schema({
    _id: String,
    // INFO: Making a field mandatory
    // This validation is specific in the context of mongoose.
    // Mongodb doesn't do the validations
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        match: /^Course/i  // name should match this pattern
    },
    category: {
        type: String,
        required: true,
        enum: [ 'web', 'mobile', 'server', 'network', 'architecture' ],  // Category should be one of these values.
        lowercase: true,   // INFO: Converts the value to lowercase while persisting
        // uppercase: true
        trim: true    // INFO: trims the value while persisting
    },
    author: String,
    price: {
        type: Number,
        // Price is required only if the Course is published
        // NOTE: Arrow function WILL NOT work here, because the arrow functions do not have
        // the this scope variable that points to the current document.
        required: function () { return this.isPublished; },  // INFO: Custom function
        min: 10,
        max: 250
    },
    tags: {
        type: Array,
        validate: {   // INFO: This is a custom validator!!!
            // isAsync: true,   // INFO: If we have to make this async validator. This is deprecated
            validator: function(v) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const result = v && v.length > 0;
                        resolve(result);
                    }, 4000);
                });
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: Date,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const courseObj = new Course( {
        name: 'Binary is two',
        author: 'Madhu',
        category: 'wab',
        tags: null,    // If we don't pass values to Arrays the mongoose will assign an empty array by default.
        isPublished: true
    } );
    const result = await courseObj.save();
    //console.log(result);
}

createCourse()
    .catch((err) => {
        for( field in err.errors) {  // err.errors will have an Error object for each field that errored out.
            console.log('  >', err.errors[field].message);
        }
    });