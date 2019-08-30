var playerCase = document.querySelectorAll("div.player");


function addHero($iD){

 	$iDBouton=$iD.id;

 	for(i = 0; i < heroArray.length; i++){

	 	if($iDBouton == heroArray[i].name){

		 	var min = 0;
			var max = playerCase.length-1;
			var carre =  Math.floor(Math.random() * (+max - +min)) ;
			var charaLvL1 = document.querySelectorAll("div."+$iDBouton+"_lvl1");
			var charaLvL2 = document.querySelectorAll("div."+$iDBouton+"_lvl2");
			var charaLvL3 = document.querySelectorAll("div."+$iDBouton+"_lvl3");


			if(carre == playerCase.length){
				carre = 0;
			}

		  	if(playerCase[carre].classList.contains("hero")){
		    	carre = carre+1;
		  	}

			if(charaLvL1.length == 2){

				if(charaLvL2.length == 2){

	  			charaLvL1[0].classList.remove($iDBouton+"_lvl1");
      		charaLvL1[0].classList.remove("hero");
          charaLvL1[0].innerHTML="";
	  			charaLvL1[1].classList.remove($iDBouton+"_lvl1");
      		charaLvL1[1].classList.remove("hero");
          charaLvL1[1].innerHTML="";
					charaLvL2[0].classList.add($iDBouton+"_lvl3");
					charaLvL2[0].classList.remove($iDBouton+"_lvl2");
					charaLvL2[1].classList.remove($iDBouton+"_lvl2");
          charaLvL2[1].classList.remove("hero");
          charaLvL2[1].innerHTML="";
					charaLvL2[2].classList.remove($iDBouton+"_lvl2");
					charaLvL2[2].classList.remove("hero");
					charaLvL2[2].innerHTML="";

				}

				charaLvL1[0].classList.add($iDBouton+"_lvl2");
				charaLvL1[0].classList.remove($iDBouton+"_lvl1");
				charaLvL1[1].classList.remove($iDBouton+"_lvl1");
        charaLvL1[1].classList.remove("hero");
        charaLvL1[1].innerHTML="";
				charaLvL1[2].classList.remove($iDBouton+"_lvl1");
				charaLvL1[2].classList.remove("hero");
				charaLvL1[2].innerHTML="";

			}

			playerCase[carre].classList.add($iDBouton+"_lvl1");
	  	playerCase[carre].classList.add("hero");
      playerCase[carre].innerHTML = "<span class='health'>"+heroArray[i].health+"</span>"
  		}

  	}

}
