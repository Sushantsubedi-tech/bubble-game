let bubblecontainer=document.querySelector(".bubblecontainer")
let hitval =0;
function hitgen(){
let hitter= document.querySelector(".hitter")
 hitval=Math.floor(Math.random()*10)
hitter.innerHTML=hitval;
}

var time=59;
function timechanger(){
    let timeset = document.querySelector(".timeset")
  
    var timer =setInterval(function(){
        if(time>0){
        time--;
            timeset.innerHTML=time;
        }
        else {
            clearInterval(timer);
            bubblecontainer.innerHTML ="GameOver";
           }
       },1000)
}
let score = 0
function scoreup(){
    let scorer =  document.querySelector(".scorer")
    score =score+10
    scorer.innerHTML=score
}
function bubblecreator(){
    
    let s = "";
    for(let i=0;i<133;i++){
        s +=`<div class="bubble"> ${Math.floor(Math.random()*10)}</div>`; 
    }
    bubblecontainer.innerHTML=s;
}
bubblecontainer.addEventListener("click",function(a){
   let b = Number( a.target.textContent)
   if(hitval==b){
    scoreup();
    hitgen();
    bubblecreator();
   }
})
bubblecreator();
timechanger();
hitgen();