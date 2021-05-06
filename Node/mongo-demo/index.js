const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then( () => console.log('Connected to mongodb'))
    .catch( (error) => console.error('mongodb connect failure', error));

// MongoDB schema types - String, Number, Date, Buffer, Boolean, ObjectID, Array
const documentSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    category: {
        type: String,
        required: true,
        enum: [ 'web', 'mobile', 'server', 'network', 'architecture' ],  // Category should be one of these values.
        lowercase: true,   // INFO: Converts the value to lowercase while persisting
        // uppercase: true
        trim: true    // INFO: trims the value while persisting
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function(v) {
            return this.isPublished;
        },
        min: 10,
        max: 255,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

// Model name is the singular name if the collection
// This returns a class
const Course = mongoose.model('Course', documentSchema);

async function createCourse() {
    const courseObj = new Course( {
        name: 'ReactJS Course',
        author: 'Madhu',
        category: ' WeB ',
        tags: ['reactjs', 'frontend'],
        isPublished: true,
        price: 18.7
    } );
    const result = await courseObj.save();
    console.log(result);
}

createCourse();

async function getDocuments() {
    // INFO: Comparision operators
    // eq - equals to
    // ne - not equals to
    // lt - less than
    // lte - less than or equals to
    // gt - greater than
    // gte -  greater than or equals to
    // in - in
    // nin - not in
    const courses = await Course.find( { author: 'Madhu', isPublished: false } )
                                //.find( { price: { $gte: 10, $lte: 20 }} )
                                //.find( { price: { $in: [10, 20, 30] }} )
                                // INFO: Logical operators
                                //.find().or( [ { author: 'Madhu' }, { author: 'Doe, John' } )
                                //.find().and( [ { author: 'Madhu' }, { isPublished: false } )
                                //.find().and( [ { author: 'Madhu' }, { date: { $gte: from, $lte: to} } ] )
                                // INFO: Regular expression
                                // Returns all the documents that have author value starting with Madhu
                                //.find( { author: /^Madhu/ } )
                                // ends with Suthanan, case insensitive match
                                //.find( { author: /Suthanan$/i } )
                                .limit(10)
                                // INFO: Pagination
                                // .skip( (pageNumber-1) * pageSize ).limit( pageSize )
                                .sort( { name: 1 } )   // 1 here is ascending order
                                // .count();   // <-- will return the number of documents.
                                .select( { name: 1, tags: 1} );
    console.log(courses);
}

// getDocuments();
