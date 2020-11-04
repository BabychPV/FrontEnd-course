window.onload = function () {

    let e;
    let p=0;
    document.getElementById('but').addEventListener("click", Push);
    e = document.createElement("p");
    e.style.position= 'absolute';
    e.style.left = '0px';
    document.body.appendChild(e);

    function Push() {
        let data = document.getElementById('input').value;
        e.innerHTML = "Input text  " + data + "<br />";
        setInterval(ChangePos,200);
    }

   function ChangePos(){
       p+=10;
       if (window.innerWidth <=p){
           p=0;
       }
       e.style.left = p + 'px'
   }

};
