var i = 0;
const start = new Date();
var right = 0;
var max = 0;
var answered = [];
var ax = new Date();
var longest_taken = '';
var text_questions = [];
var answers = [];
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
            var check_this = input.value;
            if (i > 0 && text_questions[text_questions.length - 1].includes('/')){
                check_this = parseFloat(input.value)*1000;
            };
            if (parseInt(check_this) === parseInt(answers[answers.length - 1])){
                right += 1;
                document.getElementById('answer').textContent = '';
                result.textContent = 'Correct!';
            }else{
                if (i !== 0){
                    result.textContent = 'Wrong.' ;
                    if (text_questions[text_questions.length - 1].includes('/')){
                        document.getElementById('answer').textContent = 'Correct Answer: ' + String((answers[answers.length - 1])/1000);
                    }
                    else{
                        document.getElementById('answer').textContent = 'Correct Answer: ' + String(answers[answers.length - 1]);
                    };
                }
            };
            answered.push(input.value);
            try{
                if (b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600 > max && i !== 0){
                    max = b.getSeconds() + b.getMinutes()*60 + b.getHours()*3600 - a.getSeconds() - a.getMinutes()*60 - a.getHours()*3600;
                    longest_taken = text_questions[text_questions.length - 1];
                }; 
            }catch{};
            input.value = '';
            var question = document.getElementById('question');
            i += 1;
            var x = Math.floor(Math.random()*49) + 1;
            var y = Math.floor(Math.random()*49) + 1;
            var z = ['+','-','*','+','-','*','/'][Math.floor(Math.random()*7)];
            if (z === '+'){
                text_questions.push(String(x) + ' + ' + String(y));
                answers.push(x+y);
            }else if (z === '-'){
                text_questions.push(String(x) + ' - ' + String(y));
                answers.push(x-y);
            }else if(z === '*'){
                text_questions.push(String(x) + ' x ' + String(y));
                answers.push(x*y);
            }else if(z === '/'){
                var x = Math.floor(Math.random()*200);
                var y = Math.floor(Math.random()*200);
                while (y === 0){   
                    var y = Math.floor(Math.random()*x);
                };
                text_questions.push(String(x) + ' / ' + String(y));
               answers.push(parseInt((x/y)*1000));
                };
            question.textContent = text_questions[text_questions.length - 1];
            //result.textContent = i;
        }else if (i === 20){
            i += 1;
            var input = document.getElementById('input');
            if (parseInt(input.value) === answers[answers.length - 1 ]){
                right += 1;
                document.getElementById('result').textContent = 'Correct!';
            }else{
                if (i !== 0){
                    if (text_questions[text_questions.length - 1].includes('/')){
                        document.getElementById('answer').textContent = 'Correct Answer: ' + String((answers[answers.length - 1])/1000);
                    }
                    else{
                        document.getElementById('answer').textContent = 'Correct Answer: ' + String(answers[answers.length - 1]);
                    };
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
