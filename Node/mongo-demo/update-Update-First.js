const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-excercises', () => console.log('Connected to mongodb...'));

const courseSchema = mongoose.Schema({
    _id: String,  // NOTE: This is important. Otherwise it will not work
    name: String,
    author: String,
    price: Number,
    tags: [String],
    date: Date,
    isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);
async function updateCourse(id) {
    console.log('Finding course by id', id);
    // TODO: Learn mongodb update operators
    const result = await Course.findByIdAndUpdate(id, { 
        $set: { isPublished: false }
    }, { new: true});
    //await Course.find( { _id: id });
    console.log(result);
}

updateCourse("5a68fe2142ae6a6482c4c9cb");

async function removeDocument(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}

removeDocument('5a68fe2142ae6a6482c4c9cb');
