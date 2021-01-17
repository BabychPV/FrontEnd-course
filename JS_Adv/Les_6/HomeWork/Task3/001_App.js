window.onload = function () {

    let but = document.getElementById("but");
    but.style.position = 'absolute';

    but.addEventListener('mouseover', function (e) {
        if (this.offsetHeight / 2 > e.offsetY && this.offsetWidth / 2 > e.offsetX) {
            this.style.top = elementOffsetStop(this, this.offsetTop + 10, 't') + 'px';
            this.style.left = elementOffsetStop(this, this.offsetLeft + 10, 'l') + 'px';
        }
        if (this.offsetHeight / 2 > e.offsetY && this.offsetWidth / 2 < e.offsetX) {
            this.style.top = elementOffsetStop(this, this.offsetTop + 10, 't') + 'px';
            this.style.left = elementOffsetStop(this, this.offsetLeft - 10, 'l') + 'px';
        }
        if (this.offsetHeight / 2 < e.offsetY && this.offsetWidth / 2 > e.offsetX) {
            this.style.top = elementOffsetStop(this, this.offsetTop - 10, 't') + 'px';
            this.style.left = elementOffsetStop(this, this.offsetLeft + 10, 'l') + 'px';
        }
        if (this.offsetHeight / 2 < e.offsetY && this.offsetWidth / 2 < e.offsetX) {
            this.style.top = elementOffsetStop(this, this.offsetTop - 10, 't') + 'px';
            this.style.left = elementOffsetStop(this, this.offsetLeft - 10, 'l') + 'px';
        }
    })

};


function elementOffsetStop(obj, offset, typeOffset) {
    if (typeOffset === 't') {
        if (obj.offsetParent.clientHeight <= offset + 20) {
            return obj.offsetParent.clientHeight - 30
        } else {
            if (0 >= offset) {
                return 10
            } else {
                return offset;
            }
        }
    }
    if (typeOffset === 'l') {
        if (obj.offsetParent.clientWidth <= offset) {
            return obj.offsetParent.clientWidth - 30
        } else {
            if (0 >= offset) {
                return 10
            } else {
                return offset;
            }
        }
    }
}