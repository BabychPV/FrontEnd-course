window.onload = function () {

    document.getElementById('p1').addEventListener("click", openLes_1);
    document.getElementById('p2').addEventListener("click", openLes_2);
    document.getElementById('p3').addEventListener("click", openLes_3);

    let w1 = {};
    let w2 = {};
    let w3 = {};

    function EventCloseChildwin_1() {
        document.getElementById('p1').innerHTML = 'Урок_№1';
    }

    function EventCloseChildwin_2() {
        document.getElementById('p2').innerHTML = 'Урок_№2';
    }

    function EventCloseChildwin_3() {
        document.getElementById('p3').innerHTML = 'Урок_№3';
    }

    function openLes_1() {

        if (w1.hasOwnProperty('closed') === true) {
            if (w1.closed === false) {
                w1.close();
                return;
            }
        }
        document.getElementById('p1').innerHTML = 'Урок_№1 (відкрито)';
        w1 = window.open("Resource/001_konstruktory i prototipy.pdf", "Урок_№1", "width=800,height=800,status=yes,resizable=no,left=500");
        w1.onload = function () {
            w1.onunload = EventCloseChildwin_1;
        }
    }


    function openLes_2() {
        if (w2.hasOwnProperty('closed') === true) {
            if (w2.closed === false) {
                w2.close();
                return;
            }
        }
        document.getElementById('p2').innerHTML = 'Урок_№2 (відкрито)';
        w2 = window.open("Resource/002_Rabota s dokumentami.pdf", "Урок_№2", "width=800,height=800,status=yes,resizable=no,left=500");
        w2.onload = function () {
            w2.onunload = EventCloseChildwin_2;
        }
    }

    function openLes_3() {
        if (w3.hasOwnProperty('closed') === true) {
            if (w3.closed === false) {
                w3.close();
                return;
            }
        }
        document.getElementById('p3').innerHTML = 'Урок_№3 (відкрито)';
        w3 = window.open("Resource/003_Window. Regulyarnye vyrazheniya.pdf", "Урок_№3", "width=800,height=800,status=yes,resizable=no,left=500");
        w3.onload = function () {
            w3.onunload = EventCloseChildwin_3;
        }
    }


};
