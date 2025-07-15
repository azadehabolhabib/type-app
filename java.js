const theTimer=document.querySelector(".timer");
const testArea=document.querySelector("#testarea");
const originText=document.querySelector(".origintext  p").innerHTML;
const testWrapper=document.querySelector(".testarea");
const resetButton=document.querySelector("#reset");

var timer=[0,0,0,0];
 var timerRunning=false;
var interval;





// for having zero befor time that is<=9;
function leadingZero(time){
    if (time<=9){
        time="0"+time;
    }
    return time;
}
// calculate the time
function runTimer(){
    var currentTime=leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
theTimer.innerHTML=currentTime;
// evry 1socond=1000milisocond
// evry 0.01=10milisocond
timer[3]++;
// minute
timer[0]=Math.floor(timer[3]/100/60);
// second
timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
// sadome sanie bagimoonde
timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));

}

function spellcheck(){
    var textEntered=testArea.value;
    var originTextMatch=originText.substring(0,textEntered.length);
    
    if( textEntered==originText)
        {
            testWrapper.style.borderColor="green";
            clearInterval(interval);
        }else{
            if(textEntered==originTextMatch){
                testWrapper.style.borderColor="yellow";
            }else{
                testWrapper.style.borderColor="red";
            }
        }
}
function reset (){
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunning=false;
    testArea.value="";
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";
}
function start(){
    let textEnteredlength=testArea.value.length;
    if (textEnteredlength==0 &&  !timerRunning){
        timerRunning=true;
        interval=setInterval(runTimer,10);

    }
}
testArea.addEventListener("keypress",start);
testArea.addEventListener("keyup",spellcheck);
resetButton.addEventListener("click",reset);


