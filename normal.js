var i = 0;
const start = new Date();
var right = 0;
var max = 0;
var answered = [];
var ax = new Date();
var longest_taken = '';
var last_questions = [];
var questions = [];
var button = document.getElementById('button');
var input = document.getElementById('input');
button.addEventListener("click", count);
    function count(){
        document.getElementById('button').textContent = 'Submit';
        if (i < 20){
            var b = new Date();
            var ax = new Date();
            // console.log(ax.getSeconds() + ax.getMinutes()*60 + ax.getHours()*3600);
            var result = document.getElementById('result');
            var input = document.getElementById('input');
            if (parseInt(input.value) === questions[questions.length - 1 ]){
                right += 1;
                document.getElementById('answer').textContent = '';
                result.textContent = 'Correct!';
            }else{
                if (i !== 0){
                    result.textContent = 'Wrong.' ;
                    document.getElementById('answer').textContent = 'Correct Answer: ' + String(questions[questions.length - 1]);
                }
            };
            answered.push(input.value);
            try{
                if (b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600 > max && i !== 0){
                    max = b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600;
                    longest_taken = last_questions[last_questions.length - 1];
                }; 
            }catch{};
            input.value = '';
            var question = document.getElementById('question');
            i += 1;
            var x = Math.floor(Math.random()*49) + 1;
            var y = Math.floor(Math.random()*49) + 1;
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
            //result.textContent = i;
        }else if (i === 20){
            i += 1;
            var input = document.getElementById('input');
            if (parseInt(input.value) === questions[questions.length - 1 ]){
                right += 1;
                document.getElementById('result').textContent = 'Correct!';
            }else{
                if (i !== 0){
                    document.getElementById('result').textContent = `Wrong, Correct Answer: ${String(questions[questions.length - 1])}`;
                }
            };
            input.value = ''
            var answer = document.getElementById('answer');
            var end = new Date();
            var time_taken =  Math.round(end.getSeconds() + end.getMinutes()*60 + end.getHours()*3600 - (start.getSeconds() + start.getMinutes()*60 + start.getHours()*3600));
            //(b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600)
            answer.textContent =  'Time taken: '+ String(time_taken) + ' seconds, Right answers: '  + right;
            var button = document.getElementById('button');
            button.textContent = 'Redo';
        }else{
            window.location.reload();
        };
    };
input.addEventListener('keypress',enter);
    function enter(event){
        if (event.key === 'Enter'){
            count();
        }
    }
