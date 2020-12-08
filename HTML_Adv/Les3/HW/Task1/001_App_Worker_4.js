let v;

window.addEventListener('load',
    function () {

        let $ = function (id) {
            return document.getElementById(id)
        }

        v = $("video");
        let plBut = $('playButton');

        function Init() {
            if (localStorage.getItem('videoSrc')) {
                v.src = localStorage.getItem('videoSrc');
                v.currentTime = localStorage.getItem('videoTime');
            }
        }


        Init();


        $("rewaindForward").addEventListener('click', function () {
            v.currentTime += 10;
        });

        $("rewaindBack").addEventListener('click', function () {
            v.currentTime -= 10;
        });

        $("stopButton").addEventListener('click', function () {
            v.pause();
            v.currentTime = 0;
            $("playButton").src = "img/icons8_play.png";
        });
        $("fullButton").addEventListener('click', function () {
            let elem = $("video");
            //Метод requestFullscreen() используется для отображение елемента во весь экран

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });


        $("playButton").onclick = function (e) {
            if (v.paused) {
                v.play();
                e.target.src = "img/icons8-pause.png";

            } else {
                v.pause();
                e.target.src = "img/icons8_play.png";
            }
        };

        $("video1").addEventListener('click', function (e) {
            v.src = 'Video/Landscape - 757.mp4'
            v.play();
            plBut.src = "img/icons8-pause.png";
        });

        $("video2").addEventListener('click', function (e) {
            v.src = 'Video/Mountains - 54064.mp4'
            v.play();
            plBut.src = "img/icons8-pause.png";
        });

        $("video3").addEventListener('click', function (e) {
            v.src = 'Video/Waterfall - 37088.mp4'
            v.play();
            plBut.src = "img/icons8-pause.png";
        });


    })


window.addEventListener('unload', function () {
    localStorage.setItem('videoSrc', v.src);
    localStorage.setItem('videoTime', v.currentTime);
})