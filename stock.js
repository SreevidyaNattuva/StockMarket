var inputsGiven = document.querySelectorAll(".input");
var buttonClicked = document.querySelector("#buttonCalculate");
var outputShown = document.querySelector("#output");

buttonClicked.addEventListener('click', calculateTotalPrice)

function calculateTotalPrice(){
   var initialStockPrice = Number(inputsGiven[0].value);
   var quantityofStocks = Number(inputsGiven[1].value);
   var currentStockPrice = Number(inputsGiven[2].value);
   console.log(initialStockPrice,quantityofStocks,currentStockPrice);
   var profitPercentage = 0;
   var lossPercentage =0;
   if(initialStockPrice && quantityofStocks && currentStockPrice){
        if(initialStockPrice<currentStockPrice){
            var profit = Math.trunc((currentStockPrice-initialStockPrice)*quantityofStocks);
            profitPercentage = ((profit/initialStockPrice)*100).toFixed(2);
            console.log(profitPercentage);
            outputShown.innerText = "Yay!!!Profit it is, profit is "+profit+" profit percentage is "+ profitPercentage +"%";
        }
        else if(initialStockPrice>currentStockPrice){
            var loss = Math.trunc((initialStockPrice-currentStockPrice)*quantityofStocks);
            lossPercentage = ((loss/initialStockPrice)*100).toFixed(2);
            outputShown.innerText = "Oops!!!loss it is, loss is "+loss+" loss percentage is"+ lossPercentage+"%";
        }
        else{
            outputShown.innerText = "No loss No gain";
        }
    } 
    else
    {
        outputShown.innerText = "Please enter non zero and valid inputs";
    }
}