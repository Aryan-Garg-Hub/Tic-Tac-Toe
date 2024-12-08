let boxes= document.querySelectorAll(".box");
let r_b=document.querySelector("#reset");
let n_b=document.querySelector("#newGame");
let mess_Conatiner=document.querySelector(".mess_cont");
let msg=document.querySelector("#mess");
let turn0=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((bo)=>{
    bo.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            bo.innerText="O";
            turn0=false;
        }
        else{
            bo.innerText="X";
            turn0=true;
        }
        bo.disabled=true;
        winnerCheck();
    });
});
const winnerCheck=()=>{
    for(pattern of winPattern){

        let pos1val=boxes[pattern[0]].innerText; 
        let pos2val=boxes[pattern[1]].innerText; 
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner is ",pos1val);
                showWinner(pos1val);
            }
        } 
    }
};
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation....!! for the winner ${Winner}`;
    mess_Conatiner.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
    boxes.forEach((bx)=>{
        bx.disabled=true;
    });
};
const enabledBoxes=()=>{
    boxes.forEach((bx)=>{
        bx.disabled=false;
        bx.innerText="";
    });
};
const resetGame=()=>{
        turn0=true;
        enabledBoxes();
        mess_Conatiner.classList.add("hide");
};
n_b.addEventListener("click",resetGame);
r_b.addEventListener("click",resetGame);