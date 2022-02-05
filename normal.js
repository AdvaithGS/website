var i = 0;
const start = new Date();
var right = 0;
var max = 0;
var longest_taken = '';
var last_questions = [];
var questions = []
var button = document.getElementById('button');
var input = document.getElementById('input');
button.addEventListener("click", count);
    function count(){
        document.getElementById('button').textContent = 'Submit';
        if (i < 20){
            var b = new Date()
            var result = document.getElementById('result');
            var input = document.getElementById('input');
            if (parseInt(input.value) === questions[questions.length - 1 ]){
                right += 1;
                result.textContent = 'Correct!';
            }else{
                if (i !== 0){
                    result.textContent = 'Wrong';
                }
            }
            try{
                if (b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600 > max){
                    max = b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600;
                    longest_taken = last_questions[last_questions.length - 1];
                } 
            }catch{
                
            };
            input.value = '';
            var question = document.getElementById('question');
            i += 1;
            var x = Math.floor(Math.random()*30);
            var y = Math.floor(Math.random()*30);
            var z = ['+','-','*','/'][Math.floor(Math.random()*3)];
            if (z === '+'){
                last_questions.push(String(x) + ' + ' + String(y));
                questions.push(x+y);
            }else if (z === '-'){
                last_questions.push(String(x) + ' - ' + String(y));
                questions.push(x-y);
            }else if(z === '*'){
                last_questions.push(String(x) + ' x ' + String(y));
                questions.push(x*y);
            }else if(z === '/'){
                var x = Math.floor(Math.random()*200);
                while (x%y !== 0){
                    y = Math.floor(Math.random()*x);
                };
                last_questions.push(String(x) + ' / ' + String(y));
                questions.push(x/y);
                };
            question.textContent = last_questions[last_questions.length - 1];
            var a = new Date();
            //result.textContent = i;
        }else{
            var result = document.getElementById('result');
            var end = new Date();
            result.textContent = longest_taken + ' Right got: '  + right;
        }
};
input.addEventListener('keypress',enter);
    function enter(event){
        if (event.key === 'Enter'){
            count();
        }
    }
