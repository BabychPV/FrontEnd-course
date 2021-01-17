function SelectP() {

    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.border = "4px double red";
    }
}

function SelectD() {

    let div = document.getElementsByTagName("div");

    for (let i = 0; i < div.length; i++) {
        div[i].style.border = "4px double green";
    }
}

function SelectA() {

    let a = document.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
        a[i].style.border = "4px double yellow";
    }
}



