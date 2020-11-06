window.onload = function () {
    let val = RandomInRange(1, 100);
    let divPopUp = document.getElementById('divPopUp');
    divPopUp.textContent = val;
    divPopUp.style.transform  = 'rotate(180deg)';
    document.getElementsByTagName('input')[0].onchange = function () {
        let User = document.getElementsByName('User')[0];
        let prevValue = User.value;
        if (prevValue !== val) {
            setAttribObject(User, '#efabab',  prevValue > val ? 'Ваше значення більше' : 'Ваше значення меньше', prevValue );
        } else {
            setAttribObject(User, '#efabab',  'Вітаю!', '#efabab',prevValue );
        }


    }

};

function setAttribObject(in1, in1Color, inpMess, in1PrevValue) {
    in1.style.backgroundColor = in1Color;
    in1.value = inpMess;
    setTimeout(function () {
        in1.style.backgroundColor = 'white';
        in1.value = in1PrevValue;
    }, 2000);
}

function RandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}