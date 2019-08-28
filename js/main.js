var playerTopCase = document.querySelectorAll("div.playertop");


 function addHero($iD){

 	$iDBouton=$iD.id;
 	var min = 0;
	var max = playerTopCase.length-1;
	var carre =  Math.floor(Math.random() * (+max - +min)) ;
	var charaLvL1 = document.querySelectorAll("div."+$iDBouton+"_lvl1");
	var charaLvL2 = document.querySelectorAll("div."+$iDBouton+"_lvl2");
	var charaLvL3 = document.querySelectorAll("div."+$iDBouton+"_lvl3");

	if(carre == playerTopCase.length){
		carre = 0;
	}

	if((playerTopCase[carre].classList.contains($iDBouton+"_lvl1")) || (playerTopCase[carre].classList.contains($iDBouton+"_lvl2")) || (playerTopCase[carre].classList.contains($iDBouton+"_lvl3"))){
		carre = carre+1;
	}

	if(charaLvL1.length == 2){

		if(charaLvL2.length == 2){

      		charaLvL1[0].classList.remove($iDBouton+"_lvl1");
      		charaLvL1[1].classList.remove($iDBouton+"_lvl1");
			charaLvL2[0].classList.add($iDBouton+"_lvl3");
			charaLvL2[0].classList.remove($iDBouton+"_lvl2");
			charaLvL2[1].classList.remove($iDBouton+"_lvl2");
			charaLvL2[2].classList.remove($iDBouton+"_lvl2");


		}

		charaLvL1[0].classList.add($iDBouton+"_lvl2");
		charaLvL1[0].classList.remove($iDBouton+"_lvl1");
		charaLvL1[1].classList.remove($iDBouton+"_lvl1");
		charaLvL1[2].classList.remove($iDBouton+"_lvl1");

	}

	playerTopCase[carre].classList.add($iDBouton+"_lvl1");
 }

