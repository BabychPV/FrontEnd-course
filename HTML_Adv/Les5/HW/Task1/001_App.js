window.onload = function () {

    let but;

    but = document.getElementById("but1");
    let dropdowns = document.getElementsByClassName("dropdown-content");
    but.addEventListener('mouseover', function (e) {
        dropdowns[0].classList.add('view');

    })

    window.addEventListener('mousemove', function (e) {
        if (this.className != 'dropdown-content') {
            dropdowns[0].classList.toggle('view');
        }

    })


};

