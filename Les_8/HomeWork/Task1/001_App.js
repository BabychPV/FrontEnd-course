if (window.addEventListener) window.addEventListener("load", init, false);

let Module_07 = {};
const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];


function init() {

    InitCookie();

    // sessionStorage.setItem('loaded', 'true');

    for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {
        let opt = document.createElement('option');
        opt.value = CSS_COLOR_NAMES[i];
        opt.id = CSS_COLOR_NAMES[i];
        opt.innerHTML = CSS_COLOR_NAMES[i];

        $('SizePizz').appendChild(opt);
    }


    if (document.cookie) {
        let col = getCookie('color');
        let fontSize = getCookie('fontsize');

        if (col) {
            $('main').style.backgroundColor = col;
            Module_07.color = col;
            $(col).selected = true;

        }

        if (fontSize) {
            $('main').style.fontSize = fontSize + 'px';

            Module_07.fontsize = fontSize;
            $('fontsize').value = fontSize;
        }
    }


    for (let i = 0; i < document.buy.length; i++) {
        let form = document.buy[i];

        let formValidation = false;
        let len;
        try {
            len = form.elements.length
        } catch (e) {
            console.log(e)
        }
        for (let j = 0; j < len; j++) {
            let e = form.elements[j];

            if (e.name === 'color') {
                e.addEventListener('change', setColorBackground);
            } else {
                if ('text' !== e.type) {
                    continue;
                } else {
                    let pattern = e.dataset.val;

                    if (pattern) {
                        e.addEventListener('change', validateInput);
                        e.addEventListener('change', setFontSize);
                        formValidation = true;
                    }
                }
            }
        }


    }

    document.buy.onsubmit = validateForm;
    $($('fontsize').dataset.valMsgId).className = "valid";


    window.onunload = InitCookie;


}

function InitCookie() {
    let obj = getQueryString();
    Module_07.color = obj.color;
    Module_07.fontsize = obj.fontsize;
    if (Module_07.color) {
        document.cookie = 'color=' + Module_07.color + '; max-age=' + 60 * 60 * 24;
    }
    if (Module_07.fontsize) {
        document.cookie = 'fontsize=' + Module_07.fontsize + '; max-age=' + 60 * 60 * 24;
    }
}


function validateInput() {
    let pattern = this.dataset.val,
        msgId = this.dataset.valMsgId,
        value = this.value;

    let res = value.search(pattern);
    if (res === -1) {
        document.getElementById(msgId).className = "error";
    } else {
        document.getElementById(msgId).className = "valid";
    }
}

function validateForm(handler) {

    let invalid = false;
    for (let i = 0; i < this.elements.length; ++i) {
        let e = this.elements[i];
        if (e.type === "text") {
            if (e.dataset.valMsgId)
                if ($(e.dataset.valMsgId).className === "error") invalid = true;
        }
    }

    if (invalid) {
        handler.preventDefault();
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }

}

function setColorBackground() {
    $('main').style.backgroundColor = this.value;
}

function setFontSize() {
    $('main').style.fontSize = this.value + 'px';
}


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function $(id) {
    return document.getElementById(id);
}

function getQueryString() {

    let args = {};                                  // пустой объект

    let query = location.search.substring(1);       // Получение строки запроса.
    let pairs = query.split("&");                   // Разделение строки по амперсанду

    for (let i = 0; i < pairs.length; i++) {

        let pos = pairs[i].indexOf('=');            // Проверка пары "name=value"
        if (pos === -1) {                            // Если не найдено - пропустить
            continue;
        }

        let argname = pairs[i].substring(0, pos);   // Получение имени
        let value = pairs[i].substring(pos + 1);    // Получение значения

        args[argname] = value;                      // Сохранение как свойства

    }

    return args;
}
