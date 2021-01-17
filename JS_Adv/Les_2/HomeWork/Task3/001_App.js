function Module_001__Apps() {
};

Module_001__Apps.prototype.GetById = function (id) {
    return document.getElementById(id);
}
Module_001__Apps.prototype.GetByName = function (name) {
    return document.getElementsByName(name);
}
Module_001__Apps.prototype.GetByNameClass = function (classname) {
    return document.getElementsByClassName(classname);
}
Module_001__Apps.prototype.GetByNameClassChildNode = function (classname) {
    return document.getElementsByClassName(classname);
}


window.onload = function () {

    let e = document.getElementById('answerButton')
    // e.style.visibility = 'hidden';

    e.style.hidden = true;

    // e.style.display='none';

    e.style.visibility = false
}
