function Module_001__Apps() {};

Module_001__Apps.prototype.GetById = function (id) {
    return document.getElementById(id);
}
Module_001__Apps.prototype.GetByName = function (name) {
    return document.getElementsByName(name);
}
Module_001__Apps.prototype.GetByNameClass= function (classname) {
    return document.getElementsByClassName(classname);
}
Module_001__Apps.prototype.GetByNameClassChildNode= function (classname) {
    return document.getElementsByClassName(classname);
}


window.onload = function () {

    let obj = new Module_001__Apps();
    let arr = obj.GetByNameClassChildNode('div_2');
    for (let i = 0; i < arr.length; i++) {
        alert(arr[i].getAttribute('class'))
    }

}
