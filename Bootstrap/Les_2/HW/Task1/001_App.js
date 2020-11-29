let ArrQuestionTeenagers = {
    a1: {Question: 'Сколько океанов на нашей планете?', Answer: '5', Variant: ['4', '5', '6'], CustomAnswer: -1},
    a2: {
        Question: 'Еденица измерения силы тока - это?',
        Answer: 'Ампер',
        Variant: ['Ампер', 'Вольт', 'Ватт'],
        CustomAnswer: -1
    },
    a3: {
        Question: 'Сатурн - это какая по счету планета от Солнца?',
        Answer: '6',
        Variant: ['4', '5', '6'],
        CustomAnswer: -1
    },
    a4: {
        Question: 'Луч который исходит из вершины и делит данный угол пополам?',
        Answer: 'Биссектриса',
        Variant: ['Биссектриса', 'Абцисса', 'Котангенс'], CustomAnswer: -1
    },
    a5: {
        Question: 'Какой єлемент периодических єлементов обозначает как Ag?',
        Answer: 'Серебро',
        Variant: ['Золото', 'Серебро', 'Аргон'], CustomAnswer: -1
    },
    a6: {
        Question: 'Сколько будет 0,2 км в дицеметрах?',
        Answer: '2000',
        Variant: ['20000', '2000', '200'],
        CustomAnswer: -1
    },
    a7: {
        Question: 'Самая длинная река в мире?',
        Answer: 'Амазонка',
        Variant: ['Амазонка', 'Нил', 'Янцзы'],
        CustomAnswer: -1
    },
    a8: {Question: 'Сколько хромосом в геноме человека?', Answer: '46', Variant: ['42', '44', '46'], CustomAnswer: -1},
    a9: {Question: 'Сколько океанов на нашей планете?', Answer: '5', Variant: ['4', '5', '6'], CustomAnswer: -1},
}


window.addEventListener('load', CreateObject, false);


function CreateObject() {

    let answer = null;
    let countRight = 0;
    let count = 0;

    let objLev1 = $('lev1_1');
    let objLev2 = $('lev1_2');
    let objLev3 = $('lev3');

    let div1 = document.createElement('div');
    div1.classList.add('alert', 'alert-primary', 'show');
    let div1_h4 = document.createElement('h4');
    let div1_p = document.createElement('p');
    let div1_hr = document.createElement('hr');
    div1_h4.textContent = 'Тест'
    div1_p.textContent = 'Даний тест перевіряє рівень загального освіти'
    objLev1.appendChild(div1);
    div1.appendChild(div1_h4);
    div1.appendChild(div1_hr);
    div1.appendChild(div1_p);


    let div2 = document.createElement('div');
    div2.classList.add('accordion');
    div2.addEventListener('change', SaveCheck)
    objLev2.appendChild(div2);

    let div2_1 = document.createElement('div');
    div2_1.className = 'card';
    div2.appendChild(div2_1);

    for (let obj in ArrQuestionTeenagers) {

        let div1 = document.createElement('div');
        div1.className = 'card-header';
        let div1_h5 = document.createElement('h5');
        div1_h5.textContent = ArrQuestionTeenagers[obj].Question

        div1.appendChild(div1_h5);
        div2_1.appendChild(div1);


        let div2 = document.createElement('div');
        div2.className = 'card-body d-flex flex-column';

        div2_1.appendChild(div2);

        for (let i = 0; i < ArrQuestionTeenagers[obj].Variant.length; i++) {
            let div_parent = document.createElement('div');
            div_parent.className = 'd-flex flex-row align-items-center';
            let div_parent_input = document.createElement('input');
            let div_parent_label = document.createElement('label');
            div_parent_label.textContent = ArrQuestionTeenagers[obj].Variant[i];
            div_parent_label.className = 'p-2';
            div_parent_label.htmlFor = obj + 'custom' + i;
            div_parent_input.type = 'radio';
            div_parent_input.dataset.obj = obj;
            div_parent_input.dataset.obj_val = ArrQuestionTeenagers[obj].Variant[i];
            div_parent_input.name = obj;
            div_parent_input.id = obj + 'custom' + i;
            div_parent.appendChild(div_parent_input);
            div_parent.appendChild(div_parent_label);
            div2.appendChild(div_parent);
        }
    }

    let div_btn = document.createElement('button');
    div_btn.className = 'btn btn-primary';
    div_btn.dataset.toggle = 'modal';
    div_btn.type = 'button';
    div_btn.dataset.target = '#staticWin';
    div_btn.textContent = 'Перевірить';
    div_btn.addEventListener('click',VerifyAnswers)
    objLev3.appendChild(div_btn);

    let div_mod = document.createElement('div');
    div_mod.className = 'modal fade';
    div_mod.id = 'staticWin';
    div_mod.dataset.backdrop = 'static';
    div_mod.dataset.keyboard = 'false';
    div_mod.tabIndex = -1;
    div_mod.setAttribute('aria-labelledby', 'staticBackdropLabel');
    div_mod.setAttribute('aria-hidden', 'true');

    let div_mod_d = document.createElement('div');
    div_mod_d.className = 'modal-dialog';
    div_mod.appendChild(div_mod_d);

    let div_mod_c = document.createElement('div');
    div_mod_c.className = 'modal-content';
    div_mod_d.appendChild(div_mod_c);

    let div_mod_h = document.createElement('div');
    div_mod_h.className = 'modal-header';
    div_mod_h.id = 'modalHeader';
    div_mod_c.appendChild(div_mod_h);

    let div_mod_h_t = document.createElement('h5');
    div_mod_h_t.className = 'modal-title';
    // div_mod_h_t.textContent = 'Тест пройден';
    div_mod_h_t.id = 'staticBackdropLabel';
    div_mod_h.appendChild(div_mod_h_t);

    let div_mod_h_but = document.createElement('button');
    div_mod_h_but.type = 'button';
    div_mod_h_but.className = 'btn-close';
    div_mod_h_but.dataset.dismiss = 'modal';
    div_mod_h_but.setAttribute('aria-label', 'Close');
    div_mod_h.appendChild(div_mod_h_but);

    let div_mod_b = document.createElement('div');
    div_mod_b.className = 'modal-body';
    div_mod_b.id = 'modalBody';
    div_mod_c.appendChild(div_mod_b);

    objLev3.appendChild(div_mod);
}

function SaveCheck(e) {

    if (e.target.checked === true) {
        if (ArrQuestionTeenagers[e.target.dataset.obj].Answer === e.target.dataset.obj_val) {
            ArrQuestionTeenagers[e.target.dataset.obj].CustomAnswer = 1;
            return true;
        }

    }
    ArrQuestionTeenagers[e.target.dataset.obj].CustomAnswer = 0;

}


function VerifyAnswers() {

    let countTrue = 0;
    let header;
    let mes;
    let percent;
    let _class;

    for (let obj in ArrQuestionTeenagers) {
        if (ArrQuestionTeenagers[obj].CustomAnswer === 1) {
            countTrue++;
        }
    }

    percent = (countTrue * 100) / Object.keys(ArrQuestionTeenagers).length;

    if (percent >= 60) {
        _class = 'modal-header bg-success text-white';
        header = 'Тест пройден :)'
        mes = 'Вітаю!'
    } else if (percent > 40 && percent <= 59) {
        header = 'Спробуй ще!'
        _class = 'modal-header bg-warning text-dark';
        mes = 'Треба працювати!'
    } else if (percent <= 40) {
        header = 'Тест не пройден :('
        _class = 'modal-header bg-danger text-white';
        mes = 'В тебе вийде, спробуй ще!'

    }

    $('staticBackdropLabel').textContent = header;
    $('modalHeader').className = _class;
    $('modalBody').textContent = mes +  ' Кількість відповідей ' + countTrue + ' з ' + Object.keys(ArrQuestionTeenagers).length + ' це ' + parseInt(percent) + ' %.';


}

function $(id) {
    return document.getElementById(id);
}
