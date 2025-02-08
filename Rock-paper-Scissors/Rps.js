
let score = JSON.parse(localStorage.getItem('score'));

if(!score){

    score = {

        wins:0,
        losses:0,
        ties:0
    }
}

updateScore();


function playerGame(playerMove){

    const computerMove = pickComputerMove();
    
    let result = '';


    if(playerMove === 'Scissors'){

        if(computerMove === 'Rock'){

            result = 'you lose';
            
        }
        else if(computerMove === 'Paper'){
        
            result = 'you win';
            
        }
        else if(computerMove === 'Scissors'){
            
            result = 'tie';
        }

        
    }

        
    else if(playerMove === 'Paper'){
        
        
        if(computerMove === 'Rock'){
            
            result = 'you win';
                 
        } 
        else if(computerMove === 'Paper'){
            
            result = 'tie';
                
        }
        else if(computerMove === 'Scissors'){
                
            result = 'you lose';
        }

    }


    else if(playerMove === 'Rock'){


        if(computerMove === 'Rock'){

            result = 'tie';
                
        }
        else if(computerMove === 'Paper'){
            
            result = 'you lose';
                
        }
        else if(computerMove === 'Scissors'){
            
            result = 'you win';
        }





    }


    if(result === 'you win'){

        score.wins += 1;
    }
    else if(result === 'you lose'){

        score.losses += 1;
    }
    else if(result === 'tie'){

        score.ties += 1;

    }

    localStorage.setItem('score' , JSON.stringify(score));

    updateScore();



    document.querySelector('.updateMain').innerHTML =  result;

    document.querySelector('.updateResult').innerHTML = 
    
    document.querySelector('.updateResult').innerHTML = `
    You <img src="images/${playerMove}.png" class="iconm"> vs <img src="images/${computerMove}.png" class="iconm"> Computer
`;


}
function updateScore(){

    document.querySelector('.updateScore').innerHTML = `Wins:${score.wins} , Losses:${score.losses} , Ties:${score.ties}`;

}


function pickComputerMove(){

    const randomNumber = Math.random();

    let computerMove = '';

    if( randomNumber >= 0 && randomNumber < 1 / 3 ){
    
        computerMove = 'Rock';
    }
    
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){

    computerMove = 'Paper';
    }

    else if(randomNumber > 2 / 3 && randomNumber < 1){

    computerMove = 'Scissors';
    }

    return computerMove;

}
