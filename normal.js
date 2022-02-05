var i = 0;
var button = document.getElementById('button');
var input = document.getElementById('input');
button.addEventListener("click", count);
    function count(){
        var result = document.getElementById('result')
        i += 1;
        result.textContent = i;
};
input.addEventListener('keypress',enter);
    function enter(event){
        if (event.key === 'Enter'){
            count();
        } 
    }
