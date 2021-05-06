sendEmailToCustomer();

async function sendEmailToCustomer() {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...');
    }
}

function getCustomer(id) {
    return new Promise( (resolve) => {   // This anonymous function is called an Executor
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Madhusuthanan Seetharam',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    });
}

function getTopMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });

}

function sendEmail(email, movies) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();   // Function that does not retun anything!
        }, 4000);
    });
}