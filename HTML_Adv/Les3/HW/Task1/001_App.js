window.addEventListener('load', Init);

function Init() {

    let $ = function (id) {
        return document.getElementById(id)
    };

    if (window.Worker) {
        //Вызов конструктора Worker()
        let objBut = ['ButPlus', 'ButSub', 'ButMul', 'ButDiv']
        let worker = [];
        new Worker("002_App.js");
        let first = $('in1')
        let second = $('in2')
        let result = $('out1')

        for (let i = 0; i < objBut.length; i++) {

            $(objBut[i]).addEventListener('click', function () {
                //отправка данных на Worker в ввиде массива
                worker[i] = new Worker("002_App.js");
                worker[i].addEventListener('message', function (e) {
                    result.value = e.data;
                    alert('Сообщение получено');
                    worker[i].terminate()
                })
                worker[i].postMessage([first.value, second.value, this.value]);
                alert('Сообщение отправлено');

            });
        }


    }
}


