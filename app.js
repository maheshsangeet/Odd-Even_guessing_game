const question=document.getElementById('question');
const inputBox = document.getElementById("input");
const resultBox = document.getElementById("show");
const points= document.getElementById("points");
const submitBtn=document.getElementById('submit');
const randomValue = question.innerHTML = Math.floor(Math.random() * 1001);                   


function randChange() {
    return  randomValue=question.innerHTML = Math.floor(Math.random() * 101);
}

function checkEvenOdd() {
    if (randomValue % 2 == 0)
        return 'even'
    return 'odd'
    //  return (randomValue % 2==0) ? 'even' : 'odd';
}        

let score=0;
function pointShow(val){
     if (val == "Correct"){
      points.innerHTML=(++score)+'';           // empty string concate with score it shows string formate    +''    //starts with 1
     // points.innerHTML=(score++)+'';          // starts from 0
    }
}


function check() {
    let userGuess = inputBox.value;
    let val;

    if (userGuess == checkEvenOdd()){
        val='Correct';
    }else{
        val='Wrong';
    }

    pointShow(val)
    resultBox.innerHTML = val;
    setTimeout(() =>{resultBox.innerHTML=''},2000);
    setTimeout(() =>{inputBox.value=''},2000);
    setTimeout(() => {randChange(),10000})
    // randChange()
}
sub.addEventListener('click', check);