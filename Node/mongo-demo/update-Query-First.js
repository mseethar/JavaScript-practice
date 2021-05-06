const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-excercises', { useNewUrlParser: true }, () => console.log('Connected to mongodb...'));

const courseSchema = mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    price: Number,
    tags: [String],
    date: Date,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
async function updateCourse(id) {
    console.log('Finding course by id', id);
    const course = await Course.findById(id);
    //await Course.find( { _id: id });
    console.log(course);
    if (course) {
        course.isPublished = true;
        course.author = 'Another author';
        // course.set( {
        //     isPublished: true,
        //     author: 'Another author'
        // } );
        return await course.save();
    }
}

updateCourse("5a68fe2142ae6a6482c4c9cb")
    .then(result => console.log(result));