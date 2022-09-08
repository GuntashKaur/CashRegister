const button = document.querySelector("#button");
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];


function calculateAmount(amountToBeReturened){

    for(var i= 0; i < availableNotes.length ; i++){

        const notes = Math.trunc(amountToBeReturened / availableNotes[i] );
        amountToBeReturened = amountToBeReturened % availableNotes[i];
        noOfNotes[i].innerText = notes;
      
    }
};


function showMessage(msg){
    message.innerText = msg;

};


button.addEventListener("click",  function clickHandler(){

    if(billAmount.value > 0){

        if(cashGiven.value > billAmount.value){
            const amountToBeReturened = cashGiven.value - billAmount.value;
            calculateAmount(amountToBeReturened);
        }
        else{
            showMessage("come and wash the dishes");
        }
    }
    else{
        showMessage("Invalid Amount")
    }
    

});





