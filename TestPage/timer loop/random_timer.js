
// !Timer Code

function randRange(data) {
    var newTime = data[Math.floor(data.length * Math.random())];
    return newTime;
}

function toggleSomething() {
    var timeArray = new Array(200, 300, 150, 250, 2000, 3000, 1000, 1500);

    // do stuff, happens to use jQuery here (nothing else does)
    $("#box").toggleClass("visible");

    clearInterval(timer);
    timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 1000);
// 1000 = Initial timer when the page is first loaded