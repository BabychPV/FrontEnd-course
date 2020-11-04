function getQueryString() {

    let args = {};

    let query = location.search.substring(1);
    let pairs = query.split("&");

    for (let i = 0; i < pairs.length; i++) {

        let pos = pairs[i].indexOf('=');
        if (pos === -1) {
            continue;
        }

        let argname = pairs[i].substring(0, pos);
        let value = pairs[i].substring(pos + 1);

        args[argname] = +value;

    }

    return args;
}


function Push() {
    let args = getQueryString();
    let e = document.createElement("p");

    e.innerHTML = "Sum " + (+args.a + +args.b) + "<br />";


    document.body.appendChild(e);
}