console.log('Before');
// INFO Callback hell or Christmas tree problem
 getUser(1, (user) => {
     console.log('User is', user);
     getRepositories(user.name, (repos) => {
         getCommits(repos[0], (commits) => {
             console.log(commits);
         });
     });
 });
console.log('After');

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log(`Getting commits from Github repo ${repo}`, callback);
        callback(['commit1', 'commit2', 'commit3', 'commit4', 'commit5']);
    }, 3000);
}


function getUser(id, callback) {
    setTimeout(() => {
        console.log('DB query executed...', id, callback);
        // When the result is ready send it to the callback
        callback({ id: id, name: 'mseethar' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting repos from Github...', username, callback);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

