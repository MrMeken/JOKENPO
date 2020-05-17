function game(){
    let pScore = 0;
    let cScore = 0;
    let draws  = 0;

    // MAKES THE ACTION OF PRESSING "LET'S PLAY"
    document.getElementById("play-button").addEventListener("click", startGame);

    function startGame(){
        document.getElementById("match").classList.add("fadeIn");
        document.getElementById("intro").classList.add("fadeOut");

        document.getElementById("hands").addEventListener("animationend",function(){
            this.style.animation = "";
        });
    };

    // PLAYER CHOOSING ACTION
    /// get buttons
    function actionButton () {
        // MAKING HANDS BOB
        document.getElementById("hands").style.animation = "shaking 1s ease";
        // reseting hands to rock
        document.querySelector(".player-hand").src   = "./assets/rock.png";
        document.querySelector(".computer-hand").src = "./assets/rock.png";           
        // CALLING THE COMPARE FUNCTION
        setTimeout(() => {
            console.log(compareHands(this.classList).toUpperCase());    
        }, 1000);
    };
    buttons = document.querySelector(".options").children;
    for(const button of buttons){
        button.addEventListener("click", actionButton);   
    }
    
    // COMPARE HANDS
    function compareHands(player){
        // random PC play 
        let computer = ["rock", "scissors", "paper"][Math.floor(Math.random()*3)];
        let winnerBanner = document.querySelector(".winner");
        // UPDATE HANDS +++++++++++++++++++++++++++++++++++++++++++++++++++++HOW CAN I MAKE IT WAIT????????
        document.querySelector(".player-hand").src = "./assets/"+player+".png";
        document.querySelector(".computer-hand").src = "./assets/"+computer+".png";
        
        if(player == computer){
            draws++;
            winnerBanner.innerHTML = "DRAW";
            
        } else if ((player=="rock"&&computer=="scissors")||(player=="paper"&&computer=="rock")||(player=="scissors"&&computer=="paper")){
            pScore++;
            updateScore("player");
            winnerBanner.innerHTML = "PLAYER WON";
        } else {
            cScore++;
            updateScore("computer");
            winnerBanner.innerHTML = "COMPUTER WON";
        }
        return(player[0]+ "_vs_"+ computer+"_:"+winnerBanner.innerHTML);
    }
    // UPDATE SCORE
    function updateScore(whos){
        if(whos=="computer"){
            document.getElementById("computer-score").lastElementChild.innerHTML = cScore;
        } else {
            document.getElementById("player-score").lastElementChild.innerHTML   = pScore;
        }
    };
};

game();

