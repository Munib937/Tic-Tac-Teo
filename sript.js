//Tic Tac Teo;

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgcontrainer= document.querySelector(".msg-container");
let winpara = document.querySelector("#msg");
let newgamebtn = document.querySelector("#new-game"); 
let turno = true;   //playero , playerX;

const winpattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];


const resetgame=()=>{
    turno = true;
    enabledboxes();
    msgcontrainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
       if(turno===true){
        box.innerText="O";
        turno = false;
       }else{
        box.innerText = "X";
        turno = true;
       }
       box.disabled= true;  

       checkWinner();
    });
});


const enabledboxes=  ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}



const disabledboxes=  ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showwinner =(winner)=>{
msg.innerText = `conguragulation,Winnner is ${winner}`;
msgcontrainer.classList.remove("hide");
disabledboxes();
// enabledboxes();
}



const checkWinner=()=>{
for(let pattern of winpattern){                //Har aik pattern check krna ho ga array ka.   condition check krna ka liya kha kha pr winn ho rahi ha game.
// console.log(pattern[0], pattern[1], pattern[2]);
// console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

let pos1 = boxes[pattern[0]].innerText;
let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;

if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 === pos2 && pos2===pos3){
        // console.log("conguragulation you win the game,", pos1);
        showwinner(pos1);
    }
}
}
};


newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


