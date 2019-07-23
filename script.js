let randomNumber = parseInt(Math.random() * 101);
count = 0;

function guessTheNumber(){
    let userInput = parseInt(document.querySelector ("input").value);
    console.log(randomNumber,userInput);

// resetGame
    if (userInput > randomNumber){
        alert("Too Big");
        document.querySelector ("input").value = '';
        count++;
    }else if (userInput < randomNumber){
        alert("Too Small");
        document.querySelector ("input").value = '';
        count++;

    }else{
        alert("Congratulation to won! wrong "+count);
        randomNumber = parseInt(Math.random() * 101);
        count = 0;
    }
}