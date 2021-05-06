// INFO: This file / module is neither executable nor loadable

// 1. Normalized relationship
// Advantage   : Consistency
// Disadvantage: Non-performance 
let author = {
    _id: 123123,
    name: 'Madhusuthanan Seetharam',
    interests: [ 'Programming', 'Tech']
};

let course = {
    name: 'RxJava - Deep dive',
    author: {
        id: 123123     // Storing only referece
    },
    isPublished: true,
    price: 1.00
}

// 2. Denormalized relationship
// Advantage   : Performance. Single query
// Disadvantage: Potential data inconsistency
//              - update needs updating all the courses that have the reference of this author
//              Bloated database. Redundant storage of author's data
let course = {
    name: 'RxJava - Deep dive',
    author: {    // Storing all the properties of the related entity
        _id: 123123,
        name: 'Madhusuthanan Seetharam',
        interests: [ 'Programming', 'Tech']
    },
    isPublished: true,
    price: 1.00
}

// 3. Hybrid approach

let author = {
    _id: 123123,
    name: 'Madhusuthanan Seetharam',
    interests: [ 'Programming', 'Tech']
};

let course = {
    name: 'RxJava - Deep dive',
    author: {
        id: 123123,                     // Storing referece and hot attributes
        name: 'Madhusuthanan Seetharam'
    },
    isPublished: true,
    price: 1.00
}