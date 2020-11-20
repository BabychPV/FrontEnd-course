if (window.addEventListener) window.addEventListener("load", init, false);

function init() {


    async function loadText(url, a, b) {

        let options = {
            method: 'POST',
            body: `a=${a}&b=${b}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        const response = await fetch(url, options);
        if (response.status == 200) {
            return response.text();
        } else {
            alert('Error )');
        }
    }

    async function Run() {

        let a = $('text1').value;
        let b = $('text2').value;
        let data;

        try {
            data = await loadText('CalcHandler.ashx', +a, +b);
            $('text3').value = data;
        } catch (err) {
            if (err.response.status == 404) {
                alert("Косяк");
            } else {
                throw err;
            }
        }
    }

    $('but').addEventListener('click', Run);

    let pattern = /\d/;

    $('text1').addEventListener('keypress', function (e) {
        var str = String.fromCharCode(e.charCode);
        if (!pattern.test(str)) {
            e.preventDefault();
        }
    })

    $('text2').addEventListener('keypress', function (e) {
        var str = String.fromCharCode(e.charCode);
        if (!pattern.test(str)) {
            e.preventDefault();
        }
    })

}








function $(id) {
    return document.getElementById(id);
}