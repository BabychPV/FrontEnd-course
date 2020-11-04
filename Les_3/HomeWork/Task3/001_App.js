
window.onload = function () {

    let data = prompt('Set data xx +/- xx','10+8')

    parsePromtOutput(data);

    function parsePromtOutput(str) {
        const sing = ['+','-','*','/'];
        let cursing;
        let pos;

        for (let i = 0; i < sing.length; i++) {
            pos = str.indexOf(sing[i]);
            if ( -1 !== pos){
                cursing = sing[i];
                break;
            }
            cursing = NaN;
            pos = NaN;
        }

        if(cursing === NaN){
            alert("Error")
        }else
        {
            CalcRun(str.substr(0,pos).trim(),str.substr(pos+1).trim(),cursing)
        }
    }

};
