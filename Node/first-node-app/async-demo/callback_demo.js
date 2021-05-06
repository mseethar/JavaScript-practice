//console.log('Before');
// INFO Callback hell or Christmas tree problem
// getUser(1, (user) => {
//     console.log('User is', user);
//     getRepositories(user.githubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });
//console.log('After');


// Using named functions
console.log('Before');

function displaycommits(commits) {
    console.log(commits);
}

function getCommits1(repos) {
    getCommits(repos[0], displaycommits);
}

getUser(1, getRepositories);

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting commits from Github repo...');
        callback(['commit1', 'commit2', 'commit3', 'commit4', 'commit5']);
    }, 1000);
}

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('DB query executed...');
        // When the result is ready send it to the callback
        callback( { id: id, name: 'mseethar' } );
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting repos from Github...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getRepositories(user) {
    console.log(user);
    getRepositories(user.name, getCommits1);
}

