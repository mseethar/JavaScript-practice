// Please implement a stop watch.
// start(), stop(), duration, reset
// Calling start twice in a row should throw an error
// Calling stop twice in a row should throw an error.

function StopWatch() {
    let running = false;
    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    let resetTimes = function() {
        startTime = 0;
        endTime = 0;
    }
    let startRunning = function() {
        running = true;
    }

    let stopRunning = function() {
        running = false;
    }

    this.start = function() {
        if(running) throw new Error('StopWatch is already running!');
        if(duration) console.log('Starting a new lap');
        else console.log('Starting afresh');
        startRunning();
        startTime = new Date().getTime();
    }
    this.stop = function() {
        if(!running) throw new Error('StopWatch is not running!');
        stopRunning();
        endTime = new Date().getTime();
        duration = duration + endTime - startTime;
        resetTimes();
    }

    this.reset = function() {
        stopRunning();
        resetTimes();
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            if(running) return duration + new Date().getTime() - startTime;
            else return duration;
        }
    });
}

let sw = new StopWatch();

sw.start();

sw.stop();
console.log(sw.duration);