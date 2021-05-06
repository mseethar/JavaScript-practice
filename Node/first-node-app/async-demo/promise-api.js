//#region Pre-resolved or rejected Promises
// Creating an already resolved promise
// Will be useful in unit testing
const pResolved = Promise.resolve({ result: 100 });
pResolved.then(result => console.log('pResolved is', result));

// When rejecting promises always use Errors
// This will ensure the handlers will get a call stack as well.
const pRejected = Promise.reject(new Error('pRejcted error.'));
pRejected.catch(err => console.log(err.message));
//#endregion

//#region Aggregated promises all
let p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 3000);
});

// All the async operations here will be starting in parallel (kind of)
const aggregateAllPromise = Promise.all([p1, p2]);
aggregateAllPromise.then(result => console.log('aggregateAllPromise result is', result));
//#endregion

//#region Aggregated promises all, one of them failed
p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        //resolve(1);
        reject(new Error('aggregateAllPromiseFailure p1 error'));
    }, 2000);
});

p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
        //reject(new Error('I am telling you again and again...'));
    }, 3000);
});

// All the async operations here will be starting in parallel (kind of)
const aggregateAllPromiseFailure = Promise.all([p1, p2]);
aggregateAllPromiseFailure.then(result => console.log('aggregateAllPromiseFailure result is', result))
    .catch(error => {
        console.log(error.message);
    });
//#endregion

//#region Aggregated promises race (one of)
p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 3000);
});

// All the async operations here will be starting in parallel (kind of)
const aggregateOneOfPromise = Promise.race([p1, p2]);
aggregateOneOfPromise.then(result => console.log('aggregateOneOfPromise result is', result));
//#endregion

//#region Aggregated promises race (one of) and one of them failed
p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('aggregateOneOfPromiseFailed p1 error'));
    }, 2000);
});

p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 3000);
});

// All the async operations here will be starting in parallel (kind of)
const aggregateOneOfPromiseFailed = Promise.race([p1, p2]);
aggregateOneOfPromiseFailed.then(result => console.log('aggregateOneOfPromiseFailed result is', result))
    .catch(error => console.log(error.message));
//#endregion