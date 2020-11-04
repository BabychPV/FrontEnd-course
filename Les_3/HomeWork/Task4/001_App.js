window.onload = function () {

    document.getElementById('p1').addEventListener("click", openLes_1);
    document.getElementById('p2').addEventListener("click", openLes_2);
    document.getElementById('p3').addEventListener("click", openLes_3);

    let w1 = {};
    let w2 = {};
    let w3 = {};

    function openLes_1() {

        if (w1.hasOwnProperty('closed') === true) {
            if (w1.closed === false) {
                w1.close();
                document.getElementById('p1').innerHTML = 'Урок_1';
                return;
            }
        }
        document.getElementById('p1').innerHTML = 'Урок_1 (відкрито)';
        w1 = window.open("Resource/001_konstruktory i prototipy.pdf", "Урок_1", "width=800,height=800,status=yes,resizable=no,left=500");
    }

    function openLes_2() {
        if (w2.hasOwnProperty('closed') === true) {
            if (w2.closed === false) {
                w2.close();
                document.getElementById('p2').innerHTML = 'Урок_2';
                return;
            }
        }
        document.getElementById('p2').innerHTML = 'Урок_2 (відкрито)';
        w2 = window.open("Resource/002_Rabota s dokumentami.pdf", "Урок_2", "width=800,height=800,status=yes,resizable=no,left=500");
    }

    function openLes_3() {
        if (w3.hasOwnProperty('closed') === true) {
            if (w3.closed === false) {
                w3.close();
                document.getElementById('p3').innerHTML = 'Урок_3';
                return;
            }
        }
        document.getElementById('p3').innerHTML = 'Урок_3 (відкрито)';
        w3 = window.open("Resource/003_Window. Regulyarnye vyrazheniya.pdf", "Урок_3", "width=800,height=800,status=yes,resizable=no,left=500");
    }


};
