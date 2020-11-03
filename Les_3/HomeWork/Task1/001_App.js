window.onload = function () {
    window.setTimeout(showMessage, 5000);
}

function showMessage() {
    window.open("002_ClassWork.htm", "Form", "width=616,height=417,status=yes,resizable=no");
}

class Timer {

    intervalHandler = null;

    constructor(init, classnamestart, classnamestop, classnamereset) {
        this.time = init;
        document.getElementsByClassName("StopButton").disabled = true;
        document.getElementsByClassName("ResetButton").disabled = true;


        document.getElementsByClassName(classnamereset).onclick = function () {
            this.time = 0;
        }

        document.getElementsByClassName(classnamestart).onclick = function () {
            this.intervalHandler = setInterval(function CalculateTimer() {
                this.time++;
                document.getElementsByClassName("p1").innerHTML = Timer.getTimeToString();
                document.getElementsByClassName("StartButton").disabled = true;
                document.getElementsByClassName("StopButton").disabled = false;
                document.getElementsByClassName("ResetButton").disabled = false;
            }, 1000); //:)
        }

        document.getElementsByClassName(classnamestop).onclick = function () {
            clearInterval(this.intervalHandler);
            document.getElementsByClassName("StartButton").disabled = false;
            document.getElementsByClassName("StopButton").disabled = true;
            document.getElementsByClassName("ResetButton").disabled = true;
        }
    }

    get init() {
        return this.time;
    }

    set init(value) {
        this.time = value;
    }


    static getTimeToString() {
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



