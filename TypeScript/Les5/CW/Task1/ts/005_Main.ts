import {MyDictionary} from "./001_DictionaryClass.js";
import {dictionary} from "./004_QuestionData.js";

class Init {

    public static ArrQuestionTeenagers: MyDictionary<any,any>;

    constructor(dict: MyDictionary<any,any>) {
        Init.ArrQuestionTeenagers = dict;
    }


    public Run() {

        let objLev1 = Init.$('lev1_1');
        let objLev2 = Init.$('lev1_2');
        let objLev3 = Init.$('lev3');

        let div1 = document.createElement('div');
        div1.classList.add('alert', 'alert-primary', 'show');
        let div1_h4 = document.createElement('h4');
        let div1_p = document.createElement('p');
        let div1_hr = document.createElement('hr');
        div1_h4.textContent = 'Тест';
        div1_p.textContent = 'Даний тест перевіряє рівень загального освіти';
        objLev1.appendChild(div1);
        div1.appendChild(div1_h4);
        div1.appendChild(div1_hr);
        div1.appendChild(div1_p);

        let div2 = document.createElement('div');
        div2.classList.add('accordion');
        div2.addEventListener('change', Init.SaveCheck);
        objLev2.appendChild(div2);

        let div2_1 = document.createElement('div');
        div2_1.className = 'card';
        div2.appendChild(div2_1);

        for (let j = 0; j < Init.ArrQuestionTeenagers.amountItem; j++) {

            let div1 = document.createElement('div');
            div1.className = 'card-header';
            let div1_h5 = document.createElement('h5');
            div1_h5.textContent = Init.ArrQuestionTeenagers.getValue(j).QuestionData.Question;

            div1.appendChild(div1_h5);
            div2_1.appendChild(div1);


            let div2 = document.createElement('div');
            div2.className = 'card-body d-flex flex-column';

            div2_1.appendChild(div2);

            for (let i = 0; i < Init.ArrQuestionTeenagers.getValue(j).QuestionData.Variant.length; i++) {
                let div_parent = document.createElement('div');
                div_parent.className = 'd-flex flex-row align-items-center';
                let div_parent_input = document.createElement('input');
                let div_parent_label = document.createElement('label');
                div_parent_label.textContent = Init.ArrQuestionTeenagers.getValue(j).QuestionData.Variant[i];
                div_parent_label.className = 'p-2';
                div_parent_label.htmlFor = Init.ArrQuestionTeenagers.getValue(j).key + 'custom' + i;
                div_parent_input.type = 'radio';
                div_parent_input.dataset.obj = Init.ArrQuestionTeenagers.getValue(j).key;
                div_parent_input.dataset.obj_val = Init.ArrQuestionTeenagers.getValue(j).QuestionData.Variant[i];
                div_parent_input.name = Init.ArrQuestionTeenagers.getValue(j).key;
                div_parent_input.id = Init.ArrQuestionTeenagers.getValue(j).key + 'custom' + i;
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
        div_btn.addEventListener('click', Init.VerifyAnswers);
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

       static  SaveCheck(e:any) {

            if (e.target.checked === true) {
                if (Init.ArrQuestionTeenagers.getValueForKey(e.target.dataset.obj).QuestionData.Answer === e.target.dataset.obj_val) {
                    Init.ArrQuestionTeenagers.setPropCustomAnswer(e.target.dataset.obj,1);
                    return true;
                }
            }
           Init.ArrQuestionTeenagers.setPropCustomAnswer(e.target.dataset.obj,0);

        }

    static VerifyAnswers() {

            let countTrue = 0;
            let header;
            let mes;
            let percent;
            let _class;

            for (let j = 0; j < Init.ArrQuestionTeenagers.amountItem; j++) {
                if (Init.ArrQuestionTeenagers.getValue(j).QuestionData.CustomAnswer === 1) {
                    countTrue++;
                }
            }

            percent = (countTrue * 100) / Init.ArrQuestionTeenagers.amountItem;

            if (percent >= 60) {
                _class = 'modal-header bg-success text-white';
                header = 'Тест пройден :)';
                mes = 'Вітаю!'
            } else if (percent > 40 && percent <= 59) {
                header = 'Спробуй ще!';
                _class = 'modal-header bg-warning text-dark';
                mes = 'Треба працювати!'
            } else if (percent <= 40) {
                header = 'Тест не пройден :(';
                _class = 'modal-header bg-danger text-white';
                mes = 'В тебе вийде, спробуй ще!'

            }

            Init.$('staticBackdropLabel').textContent = header;
        Init.$('modalHeader').className = _class;
        Init.$('modalBody').textContent = mes +  ' Кількість відповідей ' + countTrue + ' з ' +  Init.ArrQuestionTeenagers.amountItem + ' це ' + Math.round(percent) + ' %.';


        }

    private static  $(id: string) {
            return document.getElementById(id);
        }


}


new Init(dictionary).Run();
