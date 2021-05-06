const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-excercises');

const courseSchema = mongoose.Schema({
    tags: [ String ],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getBackendAndFrontEndCourses() {
    return await Course.find( { isPublished: true } )
                             .or( [ { price: { $gte: 15 } }, { name: /.*by.*/i } ])
                             .sort( '-price' )  // Sort by price descending
                             .select( 'name author price' );  // Select only name and author attributes
}

async function runGetBackendAndFrontEndCourses() {
    const result = await getBackendAndFrontEndCourses();
    console.log(result);
}

runGetBackendAndFrontEndCourses();