
console.log('Before');

// These async operations will be executed one after the other.
// Using promises directly
// getUser(1)
//     .then(user => getRepositories(user.githubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits));

async function displaycommits() {
    try {
        let user = await getUser(1);
        let repos = await getRepositories(user.githubUsername);
        let commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (err) {
        console.log(err);
    }
}

displaycommits();

console.log('After');

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting commits from Github repo ${repo}`);
            resolve(['commit1', 'commit2', 'commit3', 'commit4', 'commit5']);
            //reject(new Error("GitHub connection failure"));
        }, 1000);
    });
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('DB query executed...', id);
            // When the result is ready send it to the callback
            resolve({ id: id, githubUsername: 'mseethar' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repos from Github...', username);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}


