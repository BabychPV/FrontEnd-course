window.addEventListener("load", function () {
    // Проверка на введенные пользователем данные, используя пользовательские атрибуты
    for (el in document.buy.elements) {
        var currentEl = document.buy.elements[el];
        if (currentEl.type === "text" || currentEl.type === "tel") {
            currentEl.addEventListener("change", function (e) {
                if (e.target.pattern)
                    if (new RegExp(e.target.pattern).test(e.target.value))
                        e.target.style.border = "3px solid green"
                    else
                        e.target.style.border = "3px solid red"
            });
        }
    }
    var price = 0, div = document.getElementById('total');
    // Вывод данных по цене пиццы
    for (el in document.buy.elements) {
        var currentEl = document.buy.elements[el];
        if (currentEl.name === "size" || currentEl.name === "ingr") {
            currentEl.addEventListener("change", function (e) {
                if (e.target.value === "small"){
                    price = 25;
                }
                else if (e.target.value === "normal"){
                    price = 50;
                }
                else if (e.target.value === "big"){
                    price = 75;
                }
                else if (e.target.value === "mashrooms"){
                    if(e.target.checked ==false){
                        price -= 5;
                    }
                    else{
                        price += 5;
                    }
                }
                else if (e.target.value === "bekon"){
                    if(e.target.checked ==false){
                        price -= 10;
                    }
                    else{
                        price += 10;
                    }
                }
                else if (e.target.value === "tomato"){
                    if(e.target.checked ==false){
                        price -= 10;
                    }
                    else{
                        price += 10;
                    }
                }
                else if (e.target.value === "cheese"){
                    if(e.target.checked ==false){
                        price -= 15;
                    }
                    else{
                        price += 15;
                    }
                }
                else if (e.target.value === "olive"){
                    if(e.target.checked ==false){
                        price -= 5;
                    }
                    else{
                        price += 5;
                    }
                }
                div.innerHTML = 'Total Price: '+ price+' uah';
            });
        }
    }
});