window.addEventListener("load", init, false);
window.onbeforeunload = function (evt) {
    document.cookie = 'last=' + Date.now() + '; max-age=' + 60 * 60 * 24 * 7 * 31;
    evt.preventDefault();
    evt.returnValue = 'Hello';
};

function init() {

    let date = new Date();

    document.write('Last change: ' + document.cookie);
    document.cookie = 'last=' + date + '; max-age=' + 60 * 60 * 24 * 7 * 31;

}

