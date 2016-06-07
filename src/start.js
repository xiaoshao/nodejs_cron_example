var cron = require("node-cron");
var sleep = require('sleep');
var test = 1;

function start() {
    cron.schedule("* * * * * *", function () {
        console.log("started");
        test = test + 1;
        sleep.sleep(10);
        console.log(test);
        console.log("finished...");
    });
}

module.exports = start();