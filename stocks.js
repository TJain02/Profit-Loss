var initialPrice = document.querySelector("#initial-price");

var stockQuantity = document.querySelector("#stock-quantity");

var currentPrice = document.querySelector("#current-price");

var checkButton = document.querySelector("#check-btn");

var resultBox = document.querySelector("#result-box");

function clickHandler(){
    
    var initial =Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

     calculateProfitOrLoss(initial,qty,curr);
}

function calculateProfitOrLoss(ip , quantity , current)
{
    if (ip > current)
    { var loss = (ip - current) * quantity;
        var lossPercentage = (loss / (ip * quantity)) * 100;
        var lp = lossPercentage.toFixed(2);
        resultBox.innerText = "Oops! you have a loss of " + loss + " and loss percentage of " + lp  + " % ";
        console.log(loss)
    } 
    else if (current > ip)
    {
        var profit = (current - ip) * quantity;
        var profitPercntage = (profit / (ip * quantity)) * 100;
        var pp = profitPercntage.toFixed(2);
        resultBox.innerText = "Yay! you have a Profit of " + profit + " and profit percentage of " +  pp + " % ";
        console.log(profit)
    } else {
        resultBox.innerText = "No profit no loss! "   ;

    }
}

checkButton.addEventListener("click",clickHandler)
