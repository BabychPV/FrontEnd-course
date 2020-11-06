window.onload = function () {
    let selector = 0;
    document.getElementsByTagName('button')[0].onclick = function () {
        let User = document.getElementsByName('User')[0];
        let Login = document.getElementsByName('Login')[0];
        let divPopUp = document.getElementById('divPopUp');
        if ((User.value === 'Username or Email' || User.value === 'Username or Email') || (Login.value === '')) {
            setAttribObject(User, '#efabab', Login, '#efabab', divPopUp, 'Ви не заповнили поля логіну та паролю', '#efabab', 'block');
        } else {
            if ((User.value === 'admin') && (Login.value === '12345')) {
                setAttribObject(User, 'white', Login, 'white', divPopUp, 'Вхід виконано', 'green', 'block');
            } else {
                setAttribObject(User, '#efabab', Login, '#efabab', divPopUp, 'Логін чи пароль не вірний', '#efabab', 'block');
            }
        }


    }

}


function setAttribObject(in1, in1Color, in2, in2Color, popUp, popUpMess, popUpColor, popUpDisplay) {
    in1.style.backgroundColor = in1Color;
    in2.style.backgroundColor = in2Color;
    popUp.textContent = popUpMess;
    popUp.style.color = popUpColor;
    popUp.style.fontSize = '20px';
    popUp.style.display = popUpDisplay;
    setTimeout(function () {
        in1.style.backgroundColor = in1Color;
        in2.style.backgroundColor = in2Color;
        popUp.style.display = 'none'
    }, 2000)
}