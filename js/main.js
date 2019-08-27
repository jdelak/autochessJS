var addRed = document.getElementById('addred');
var playerTopCase = document.querySelectorAll("div.playertop");
 addRed.onclick = addRedDot;


function addRedDot(){
	var min = 0;
	var max = playerTopCase.length-1;
	var carre =  Math.floor(Math.random() * (+max - +min)) ;
	console.log(carre);

	var playerTopRed1 = document.querySelectorAll("div.redlvl1");
	var playerTopRed2 = document.querySelectorAll("div.redlvl2");
	// Si carre dépasse l'index max de PlayerTopCase on initialise carre à 0;
	if(carre == playerTopCase.length){
		carre = 0;
	}

	// Si un rond existe dans une case on place le rond à la case suivante
	if((playerTopCase[carre].classList.contains('redlvl1')) || (playerTopCase[carre].classList.contains('redlvl2')) || (playerTopCase[carre].classList.contains('redlvl3'))){
		carre = carre+1;
	}

	if(playerTopRed1.length == 2){

		if(playerTopRed2.length == 2){

      playerTopRed1[0].classList.remove('redlvl1');
      playerTopRed1[1].classList.remove('redlvl1');
			playerTopRed2[0].classList.add('redlvl3');
			playerTopRed2[0].classList.remove('redlvl2');
			playerTopRed2[1].classList.remove('redlvl2');
			playerTopRed2[2].classList.remove('redlvl2');


		}

		playerTopRed1[0].classList.add('redlvl2');
		playerTopRed1[0].classList.remove('redlvl1');
		playerTopRed1[1].classList.remove('redlvl1');
		playerTopRed1[2].classList.remove('redlvl1');

	}

	playerTopCase[carre].classList.add('redlvl1');

}
