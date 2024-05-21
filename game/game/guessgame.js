

    

    function generateRandomNumber () {
        
        var randomArr = [];
        while(true) {
            var digit = Math.floor(Math.random() * 10);
            if(randomArr.length < 4 && !randomArr.includes(digit)) {
                if(!(randomArr.length === 0 && digit === 0)){
                    randomArr.push(digit);
                }
            }
            if(randomArr.length === 4) {
                break;
            }
        }
        
        return randomArr[0]*1000 + randomArr[1]*100 + randomArr[2]*10 + randomArr[3];
    }

    var randomNum = generateRandomNumber();
    var prediction = 0;
    
function guessNumber() {
    prediction ++;
    var guess = document.getElementById("guess").value;
    //guess = Number(guess);
    
    var arrayOfDigits = Array.from(String(guess), Number);
    var arrayOfRandom = Array.from(String(randomNum), Number);

    if (arrayOfDigits.length === 0) {
        window.alert("Error..Please enter a number!!");
    } 
    else if (arrayOfDigits.length !== 4) {
        window.alert("Error... Enter 4 digit!!");
    } 


    var trueDigit = 0;
    var falseDigit = 0;

    for(var i = 0; i<4; i++) {
        for(var j = 0; j<4; j++) {
           
        if(arrayOfDigits[i] === arrayOfRandom[j]) {
            if( i === j) {
                trueDigit++;
            }
            else {
                falseDigit--
            }
        } 
    }

    }
    console.log('Result: '+ trueDigit + ' ' + falseDigit );
    document.getElementById("result").value = trueDigit.toString() + ' ' + falseDigit.toString();
    document.getElementById("prediction").innerHTML = "Number of prediction: " + prediction.toString();
    if(trueDigit === 4) {
        
        window.alert("Kazandiniz");
    }
}
