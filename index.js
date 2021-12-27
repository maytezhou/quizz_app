const btnStart = document.getElementById('btn-start');
const firstScreen = document.getElementById('login-screen');
const optionsScreen = document.getElementById('options-screen');
const lastScreen1 = document.getElementById('last-screen-1');
const lastScreen2 = document.getElementById('last-screen-2');
const thanksScreen1 = document.getElementById('thanks-screen-1');
const thanksScreen2 = document.getElementById('thanks-screen-2');
optionsScreen.style.display='none';
lastScreen1.style.display='none';
lastScreen2.style.display='none';
thanksScreen1.style.display = 'none';
thanksScreen2.style.display ='none';
let currentValue = 0;
let counterC = 0;
let counterW = 0;

window.onload = function() {
    document.getElementById('user-input').value = '';
    }
const qCapitals = [
    {
    q:'What is the capital of Ireland?',
    options:['Dublin','Bern','Seoul','Liubliana'],
    ans:'Dublin'
    },
    {
        q:'What is the capital of France?',
        options:['Bangkok','Taipei','Paris','Berlin'],
        ans:'Paris'
    },
    {
        q:'What is the capital of Italy?',
        options:['Edinburgh','Rome','Washingtong D.C.','Vilna'],
        ans:'Rome'
    },
    {
        q:'What is the capital of Peru?',
        options:['Lima','Sao Paulo','Mexico DF','Medellin'],
        ans:'Lima'
    },
    {
        q:'What is the capital of Portugal?',
        options:['Lisboa','Bucarest','Oslo','Budapest'],
        ans:'Lisboa'
    },
   
    
];

const qWomenTech = [
    {
    q:'Who was the first girl programmer?',
    options:['Ada Lovelace','Amelia Earhart','Harriet Tubman'],
    ans:'Ada Lovelace'
    },
    {
        q:'Who lead the NASA Software Team that landed Astronauts on the moon?',
        options:['Grace Hopper','Margaret Hamilton','Neil Armstrong'],
        ans:'Margaret Hamilton'
    },
    {
        q:'How many women programmed the First Computer ?',
        options:['4','5','6'],
        ans:'6'
    },
    
];


function printCapiQ(arrQ){  
    
    for ( let i = 0; i < arrQ.length; i ++){
        let divQuestion = document.createElement('div');      
        divQuestion.setAttribute("id",`capitalquestion${i}`);   
        divQuestion.setAttribute("class",'pcqdiv');   
        document.querySelector("#capitals-container").appendChild(divQuestion);
        console.log(arrQ[i].q)
       divQuestion.innerHTML+= `<p class="pcq">${arrQ[i].q}</p>`;
         console.log(arrQ[i].q)
        for (let j = 0 ; j < arrQ[i].options.length; j ++){
           divQuestion.innerHTML+= `<input class="input-radio-style" onclick="handleClick(this);" type="radio" name="capital" value="${arrQ[i].options[j].toLowerCase()}"> ${arrQ[i].options[j]}<br>`;
            console.log(arrQ[i].options[j]);
        }
        if(i !=arrQ.length-1){
            divQuestion.innerHTML+= `<button id ="btn-cnext-${i}" class="btn-next" >Next</button>`;
        }else{
            divQuestion.innerHTML+= `<button id ="btn-cresults-${i}" class="btn-results" >See Results</button>`;
        }
       
       
    }     

}

printCapiQ(qCapitals);

function printWTechQ(arrQ){
    for ( let i = 0 ; i <arrQ.length ; i ++){
        let divQuestion = document.createElement('div');
        divQuestion.setAttribute("id",`womenquestion${i}`);  
        divQuestion.setAttribute("class",'pwqdiv');  
        document.querySelector("#women-container").appendChild(divQuestion); 
        console.log(arrQ[i].q)
        divQuestion.innerHTML+= `<p class="pwq">${arrQ[i].q}</p>`;
        console.log(arrQ[i].q)
        for (let j = 0 ; j < arrQ[i].options.length; j ++){
            divQuestion.innerHTML+= `<input class="input-radio-style"    onclick="handleClick(this);" type="radio" name="women" value="${arrQ[i].options[j].toLowerCase()}"> ${arrQ[i].options[j]}<br>`;
             console.log(arrQ[i].options[j]);
         }
         if(i!= arrQ.length-1){
            divQuestion.innerHTML+= `<button id ="btn-wnext-${i}" class="btn-next" >Next</button>`;  
         }else {
            divQuestion.innerHTML+= `<button id ="btn-wresults-${i}" class="btn-results" >See Results</button>`;
         }
        
    }

}

printWTechQ(qWomenTech);


const displayNoneCQuestions =  (arrQ) => {
    for ( let i = 0 ; i < arrQ.length; i ++){
       document.getElementById(`capitalquestion${i}`).setAttribute("class",'hide');
    }

}

displayNoneCQuestions(qCapitals);


const displayNoneWQuestions =  (arrQ) => {
    for ( let i = 0 ; i < arrQ.length; i ++){
       document.getElementById(`womenquestion${i}`).setAttribute("class",'hide');
    }

}

displayNoneWQuestions(qWomenTech);


btnStart.addEventListener('click', function(){
  const userName = document.getElementById('user-input').value;
  alert("Welcome " + userName);
  firstScreen.style.display = 'none';
  optionsScreen.style.display = 'block';
})

const btnCountries = document.getElementById('btn-countries');
btnCountries.addEventListener('click', () =>{
  optionsScreen.style.display = 'none';
  capitalquestion0.style.display = 'block';
})



function handleClick(myRadio) {   
    currentValue = myRadio.value;
}


const btnNext = document.getElementById('btn-cnext-0');
btnNext.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            capitalquestion0.style.display = 'none';
            capitalquestion1.style.display= 'block';
            if(qCapitals[0].ans.toLowerCase() == currentValue){
                counterC++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue= 0;
        console.log("You have "+ counterC + " points ");
 
       
 
  
})



const btnNext1 = document.getElementById('btn-cnext-1');
btnNext1.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            capitalquestion1.style.display = 'none';
            capitalquestion2.style.display= 'block';
            if(qCapitals[1].ans.toLowerCase() == currentValue){
                counterC++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
       currentValue= 0;
       console.log("You have "+ counterC + " points ");
 
  
})

const btnNext2 = document.getElementById('btn-cnext-2');
btnNext2.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            capitalquestion2.style.display = 'none';
            capitalquestion3.style.display= 'block';
            if(qCapitals[2].ans.toLowerCase() == currentValue){
                counterC++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterC + " points ");
       
 
  
})

const btnNext3 = document.getElementById('btn-cnext-3');
btnNext3.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            capitalquestion3.style.display = 'none';
            capitalquestion4.style.display= 'block';
            if(qCapitals[3].ans.toLowerCase() == currentValue){
                counterC++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterC + " points ");
       
 
  
})

const btnCResults = document.getElementById('btn-cresults-4');
btnCResults.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            capitalquestion4.style.display = 'none';
            lastScreen1.style.display ='block';
            if(qCapitals[4].ans.toLowerCase() == currentValue){
                counterC++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterC + " points ");
        const pPointsdiv = document.getElementById('points-screen-1');
        pPointsdiv.innerText=`You have ${counterC} points`;
       
 
  
})



const btnPlayAgain=document.getElementById('btn-play-again1');
btnPlayAgain.addEventListener('click', () =>{
  lastScreen1.style.display='none';
  optionsScreen.style.display='block';
  counterC = 0;
  counterW = 0; 
  currentValue = 0;
})

const btnEnd1 = document.getElementById('btn-end-1');
btnEnd1.addEventListener('click', () =>{
  lastScreen1.style.display='none';
  thanksScreen1.style.display = 'block';
  counterC = 0;
  counterW = 0; 
  currentValue = 0;
})



const btnWomenTech = document.getElementById('btn-womentech');
btnWomenTech.addEventListener('click', () =>{
  optionsScreen.style.display ='none';
  womenquestion0.style.display = 'block';
})


const btnWNext = document.getElementById('btn-wnext-0');
btnWNext.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            womenquestion0.style.display = 'none';
            womenquestion1.style.display= 'block';
            if(qWomenTech[0].ans.toLowerCase() == currentValue){
                counterW++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterW + " points ");
       
 
  
})

const btnWNext1 = document.getElementById('btn-wnext-1');
btnWNext1.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            womenquestion1.style.display = 'none';
            womenquestion2.style.display= 'block';
            if(qWomenTech[1].ans.toLowerCase() == currentValue){
                counterW++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterW + " points ");
       
 
  
})


const btnWResults = document.getElementById('btn-wresults-2');
btnWResults.addEventListener('click', () =>{   
       
        if(currentValue != 0){
            console.log(currentValue);
            womenquestion2.style.display = 'none';
            lastScreen2.style.display ='block';
            if(qWomenTech[2].ans.toLowerCase() == currentValue){
                counterW++;
            }
        }else{
            console.log(currentValue);
            alert("Please select an option");
        }
        currentValue=0;
        console.log("You have "+ counterW + " points ");
        const pPointsdiv = document.getElementById('points-screen-2');
        pPointsdiv.innerText=`You have ${counterW} points`;
       
 
  
})


const btnPlayAgain2=document.getElementById('btn-play-again2');
btnPlayAgain2.addEventListener('click', () =>{
  lastScreen2.style.display='none';
  optionsScreen.style.display='block';
  counterW = 0;
  counterC = 0;
  currentValue = 0 ;
})





const btnEnd2 = document.getElementById('btn-end-2');
btnEnd2.addEventListener('click', () =>{
 
  lastScreen2.style.display ='none';
  thanksScreen2.style.display='block';
  counterW = 0;
  counterC = 0;
  currentValue = 0 ;
})


