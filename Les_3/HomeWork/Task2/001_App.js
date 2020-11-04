function getQueryString() {

    let args = {};                                  // пустой объект

    let query = location.search.substring(1);       // Получение строки запроса.
    let pairs = query.split("&");                   // Разделение строки по амперсанду

    for (let i = 0; i < pairs.length; i++) {

        let pos = pairs[i].indexOf('=');            // Проверка пары "name=value"
        if (pos == -1) {                            // Если не найдено - пропустить
            continue;
        }

        let argname = pairs[i].substring(0, pos);   // Получение имени
        let value = pairs[i].substring(pos + 1);    // Получение значения

        args[argname] = +value;                      // Сохранение как свойства

    }

    return args;
}


function Push() {
    let args = getQueryString();
    let e = document.createElement("p");

    e.innerHTML = "Sum " + (+args.a + +args.b) + "<br />";


    document.body.appendChild(e);
}