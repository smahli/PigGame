var scores,roundScore,activePlayer;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
	// 1. Generate random number
	var dice = Math.floor(Math.random() * 6 )+ 1;

	// 2. Display the result 
	var diceDOM = document.querySelector('.dice');

	diceDOM.style.display ='block';
	diceDOM.src='dice-'+ dice +'.png';


	//3. Update the round score IF the rolled number was NOT a 1.
	if(dice!==1){
		//add score
		roundScore = roundScore + dice;
		document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	}else{
		// next player
		nextPlayer();
		
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	//1. add current score to global score
	scores[activePlayer]+= roundScore; // same AS score[activeplayer]= score[activePlayer]+ roundScore;

	//2.update the user interface
	document.querySelector('score-'+activePlayer).textContent =scores[activePlayer];
	//3. Check if the player won the game
	if(scores[activePlayer] >= 100){
		document.querySelector('#name-'+ activePlayer).textContent='WINNER!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');

	}else{
		nextPlayer();
	}

	// nextPlayer
	

});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer=0;  //ternary opeartor
			/*  above line iss similar to this code
			if(activePlayer===0){
				activePlayer=1;
			}else{
				activePlayer=0;
			}  */	

			roundScore =0; // when a player stops rolling the dice we should start
							// the secend player with zero
			document.getElementById('current-0').textContent='0';
			document.getElementById('current-1').textContent='0';
			
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			//document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');

			document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init) ;

function init(){
scores = [0,0];
activePlayer=0;
roundScore=0;

//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current'+ activePlayer).innerHTML ='<em>' + '</em>'
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');



}







/*  read a value using query selector//
 var x = document.querySelector('#score-0').textContent;
 console.log(x);*/
 
