const button = document.querySelector("#button");
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
const message = " ";

// console.log("message",message)
function calculateAmount(amountToBeReturened){

    for(var i= 0; i < availableNotes.length ; i++){

        const notes = Math.trunc(amountToBeReturened / availableNotes[i] );
        amountToBeReturened = amountToBeReturened % availableNotes[i];
        noOfNotes[i].innerText = notes;
      
    }
};

console.log("message",message);

function showMessage(msg){
    message.innerText = msg;

};


button.addEventListener("click",  function clickHandler(){

    if(billAmount.value > 0){
// console.log("if")
        if(cashGiven.value >= billAmount.value){
            console.log("if")
            const amountToBeReturened = cashGiven.value - billAmount.value;
            calculateAmount(amountToBeReturened);
        }
        else{
            console.log("else")
            showMessage("come and wash the dishes");
        }
    }
    
    else{
        
        showMessage("Invalid Amount")
    }
    

});





