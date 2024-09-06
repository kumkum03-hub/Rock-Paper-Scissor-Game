let userScore=0;
let compScore=0;

let score=document.querySelectorAll(".score");
let uScore=document.querySelector("#userScore");
let cScore=document.querySelector("#compScore");
let msgContainer=document.querySelectorAll(".msg-container");
let msg=document.querySelector("#msg");
let msgContainer2=document.querySelectorAll(".msg-container2");
let msg2=document.querySelector("#msg2");

const choices=document.querySelectorAll(".choice");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const compChoiceMsg=()=>{
    msgContainer2.classList.remove("hide");
    msg2.innerText=`The computer's  choice is ${compChoice}`;
};
const playGame=(userChoice)=>{
    console.log("The user choice is:",userChoice);
    compChoice=getCompChoice();
    console.log("The computer choice is:",compChoice);

    choices.forEach((choice)=>{
        msg.innerText="Play your move";
        msg2.innerText=`The computer choses ${compChoice}`;

    })
    if(userChoice==="rock" && compChoice==="paper")
    {
        compScore++;
        cScore.innerText=(compScore);
        msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
    else if(userChoice==="paper" && compChoice==="scissor")
    {
        compScore++;
        cScore.innerText=(compScore);
        msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
    else if(userChoice==="scissor" && compChoice==="rock")
    {
        compScore++;
        cScore.innerText=(compScore);
        msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
    else if(userChoice==="paper" && compChoice==="rock")
    {
        userScore++;
        uScore.innerText=(userScore);
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
    }
    else if(userChoice==="scissor" && compChoice==="paper")
    {
        userScore++;
        uScore.innerText=(userScore);
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
    }
    else if(userChoice==="rock" && compChoice==="scissor")
    {
        userScore++;
        uScore.innerText=(userScore);
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerText="Draw- Try Again";
        msg.style.backgroundColor="#231B1B";
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})