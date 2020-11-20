if (window.addEventListener) window.addEventListener("load", init, false);

function init(){

    let form =document.form1;
    let login = form.login.dataset.watermark;
    SetWatermark(form,'login',login);
}

function SetWatermark (form,name,watermark) {

    let input = form[name];

    Defwatermark(input,watermark);

    input.onfocus = function () {
        if (input.value == watermark)
        {
            Clearwatermark(input);
        }
    };

    input.onblur = function () {
        if (input.value == "")
        {
            Defwatermark(input,watermark);
        }
    };


};

function Defwatermark(input,watermark)
{
    input.value = watermark;
    input.style.color = "gray";
    input.style.fontStyle = "italic";
};

function Clearwatermark(input)
{
    input.value = "";
    input.style.color = "black";
    input.style.fontStyle = "normal";
};