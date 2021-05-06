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

async function getBackendCourses() {
    return await Course.find( { tags: 'backend' }  )
                                .sort( { name: 1} )
                                .select( { name: 1, author: 1, tags: 1} );
}

async function runGetBackendCourses() {
    const result = await getBackendCourses();
    console.log(result);
}

runGetBackendCourses();