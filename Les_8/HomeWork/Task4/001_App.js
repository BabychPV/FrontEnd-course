window.onload = function () {

    window.addEventListener('keydown',function(e){
        let body = document.body;
        if(e.ctrlKey === true && e.shiftKey===false && e.keyCode === 83){
            body.innerHTML='Збережено';
        }
        else if(e.ctrlKey === true && e.shiftKey===false && e.keyCode === 65){
            body.innerHTML='Обрано все';
        }
        else if(e.ctrlKey === true && e.shiftKey===true && e.keyCode === 83){
            body.innerHTML='Збережено все';
        }
    })
};




