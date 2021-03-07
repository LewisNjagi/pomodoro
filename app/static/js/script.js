document.getElementById("call").addEventListener("click", function () {
    const startingMinutes = 25;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('countdown');

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
})

// const startingMinutes = 5;
// let time = startingMinutes * 60;

// const countdownfive = document.getElementById('countdownfive');

// setInterval(updateCountdownfive, 1000);

// function updateCountdownfive() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     countdownfive.innerHTML = `${minutes}:${seconds}`;
//     time--;
// }
var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 5;

    function myClock() {
        document.getElementById("demo").innerHTML = --c;
        if (c == 0) {
            clearInterval(myTimer);
            alert("Reached zero");
        }
    }
}