// Promise is a holder for eventual result of an operation
// Initially it is in Pending state
// If the operation is successful then it moves to Fulfilled state or
// if the operation has failed it moves to Rejected state.
const p = new Promise( function (resolve, reject) {
    setTimeout(() => {
        //resolve(1);   // When a function completes successfully call resolve and pass the return value
        reject(new Error('I told you so...'));   // When a function fails call reject and pass the error.
    }, 2000);
});

p.then( result => console.log(result))
 .catch( error => console.log(error.message));