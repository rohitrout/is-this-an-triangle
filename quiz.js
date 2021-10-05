var quizForm=document.querySelector(".quiz-form");
var btnCalc=document.querySelector("#btn-submit");

var outputl=document.querySelector("#output");


var correctAns=["45","30"];

function calculateScore()
{
let score=0;
let index=0;
const formResults=new FormData(quizForm);
for(let value of formResults.values()){
   if(value===correctAns[index]){
       score=score+1;
   }
   index=index+1;
}
console.log(score);
outputl.innerText="Your Score is "+score;
}

btnCalc.addEventListener("click", calculateScore);

