const question=document.getElementById('question');
const inputBox = document.getElementById("input");
const resultBox = document.getElementById("show");
const submitBtn=document.getElementById('submit');
const scoreBox = document.getElementById('#score');
let randomValue = question.innerHTML=Math.floor(Math.random() * 1001);                   


// ***** question generator  *****//
function randChange() {
    setTimeout(()=>randomValue = question.innerHTML=Math.floor(Math.random() * 1001),2000);
}


//****  checking given question even/odd  ******//
function checkEvenOdd() {
    if (randomValue % 2 == 0) {
        return 'even'
    }else {
        return 'odd'
    }
}        


//******  points ******//
let score=0;
function pointShow(val){
     if (val == "Correct"){
        scoreBox.innerHTML = ++score;
    //  scoreBox.innerHTML = score++;          // starts from 0
    }
}


//******  verify *******//
function verify() {
    let userGuess = inputBox.value;
    let val;

    if (userGuess == checkEvenOdd()){
        val='Correct';
    }else{
        val='Wrong';
    }

    resultBox.innerHTML = val;

    pointShow(val)
    randChange()

    setTimeout(() =>{
        resultBox.innerHTML='';
        inputBox.value=''
    },2000);
}
submitBtn.addEventListener('click', verify);



