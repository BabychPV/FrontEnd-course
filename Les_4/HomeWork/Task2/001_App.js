window.onload = function () {
    let selector = 0;
    document.getElementsByTagName('button')[0].onclick = function () {
        let User = document.getElementsByName('User')[0];
        let Login = document.getElementsByName('Login')[0];
        let divPopUp = document.getElementById('divPopUp');
        if ((User.value === 'Username or Email' || User.value === 'Username or Email') || (Login.value === '')) {
            User.style.backgroundColor = '#efabab';
            Login.style.backgroundColor = '#efabab';
            divPopUp.textContent = 'Ви не заповнили поля логіну та паролю'
            divPopUp.style.color = '#efabab'
            divPopUp.style.fontSize = '20px'
            divPopUp.style.display = 'block'
            setTimeout(function () {
                User.style.backgroundColor = 'white';
                Login.style.backgroundColor = 'white';
                divPopUp.style.display = 'none'
            },2000)
        } else {
            if ((User.value === 'admin') && (Login.value === '12345')) {
                divPopUp.textContent = 'Вхід виконано'
                divPopUp.style.color = 'green'
                divPopUp.style.fontSize = '20px'
                divPopUp.style.display = 'block'
                setTimeout(function () {
                    User.style.backgroundColor = 'white';
                    Login.style.backgroundColor = 'white';
                    divPopUp.style.display = 'none'
                },2000)

            }
        }


    }

}
