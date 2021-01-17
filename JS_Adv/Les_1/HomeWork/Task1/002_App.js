(function () {

    window.onload = function () {
        let div1 = document.getElementById("div_1");

        for (let i = 0; i < 5; i++) {
            let p1 = document.createElement("p")
            p1.innerHTML = "Paragraph " + i;
            div1.appendChild(p1);
        }

        setTimeout(function () {
            let paragraphs = document.getElementsByTagName("p");

            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.textTransform = 'uppercase'
            }

        }, 5000)


    }

})();