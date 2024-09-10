let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turn0 = true;

const winpat =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetg = () =>{
let turn0 = true;
enableboxes();
msgcont.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const showwin = (winner) =>{
    msg.innerText = `the user with ${winner} won this game`;
    msgcont.classList.remove("hide");
    disableboxes();
};

const checkwinner = () =>{
    for(let pat of winpat){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if((pos1 !=="") && (pos2 !=="") && (pos3 !=="")){
            if((pos1 === pos2) && (pos2 === pos3)){
                console.log("winner",pos1);

                showwin(pos1);
            }
        }
    };
};

newbtn.addEventListener("click",resetg);
resetbtn.addEventListener("click",resetg);