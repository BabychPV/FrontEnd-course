window.onload = function () {
    let selector = 0 ;
    document.getElementsByTagName('button')[0].onclick = function(){
        let divs = document.getElementsByTagName('div');
        if(selector>=5) {selector = 0; divs[4].style.backgroundColor = 'green';}
        divs[selector-1<0?0:selector-1].style.backgroundColor = 'green';

        divs[selector].style.backgroundColor = 'red';
        selector++;

    }

};



