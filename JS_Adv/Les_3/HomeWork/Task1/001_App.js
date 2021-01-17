window.onload = function () {
    let classnamestop = "StopButton";
    let classnamereset = "ResetButton";
    let classnamestart = "StartButton";
    let t = new Timer(0, classnamestart, classnamestop, classnamereset);

    document.getElementById(classnamestop).disabled = true;
    document.getElementById(classnamereset).disabled = true;
    document.getElementById("p1").style.font = 'bold 32pt sans-serif'
    document.getElementById("p1").style.color = '#b8b4b7'

    document.getElementById(classnamereset).onclick = function () {
        t.time = 0;
    };

    document.getElementById(classnamestart).onclick = function () {
        t.intervalHandler = setInterval(function CalculateTimer() {
            t.time++;
            document.getElementById("p1").textContent = t.getTimeToString();
            // $('p1').textContent = t.getTimeToString();
            document.getElementById(classnamestart).disabled = true;
            document.getElementById(classnamestop).disabled = false;
            document.getElementById(classnamereset).disabled = false;
        }, 1000); //:)
    };


    document.getElementById(classnamestop).onclick = function () {
        clearInterval(t.intervalHandler);
        document.getElementById(classnamestart).disabled = false;
        document.getElementById(classnamestop).disabled = true;
        document.getElementById(classnamereset).disabled = true;
    }
};

class Timer {

    intervalHandler = null;

    constructor(init, classnamestart, classnamestop, classnamereset) {
        this.time = init;
        // document.getElementById(classnamestop).disabled = true;
        // document.getElementById(classnamereset).disabled = true;
        //
        //
        // document.getElementById(classnamereset).onclick = function () {
        //     this.time = 0;
        // }
        //
        // document.getElementById(classnamestart).onclick = function () {
        //     document.getElementById(classnamestart).disabled = true;
        //     document.getElementById(classnamestop).disabled = false;
        //     document.getElementById(classnamereset).disabled = false;
        //     this.intervalHandler = setInterval(function CalculateTimer() {
        //         this.time++;
        //         document.getElementById("p1").innerHTML = Timer.getTimeToString();
        //
        //     }, 1000); //:)
        // }
        //
        // document.getElementById(classnamestop).onclick = function () {
        //     clearInterval(this.intervalHandler);
        //     document.getElementById(classnamestart).disabled = false;
        //     document.getElementById(classnamestop).disabled = true;
        //     document.getElementById(classnamereset).disabled = true;
        // }
    }


    // static getTimeToString() {
    getTimeToString() {
        let sec_num = parseInt(this.time, 10); // don't forget the second param
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    }


}



