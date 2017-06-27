function dragon_slayer() {
	var slaying = true;
	//math to calculate damage
	var youHit = Math.floor(Math.random()*2);
	var damageThisRound = Math.floor(Math.random()*5+1);
	var totalDamage = 0;
	
	while(slaying) {
		if(youHit) {
			document.getElementById("damage").innerHTML = "You hit the dragon and did " + damageThisRound + " damage!";
			totalDamage += damageThisRound;
			
			if(totalDamage >= 3) {
				document.getElementById("result").innerHTML = "You did it! You slayed the dragon!";
				slaying = false;
			} else {
				youHit = Math.floor(Math.random()*2);
			}
		} else {
			document.getElementById("result").innerHTML = "The dragon incinerates you! Your toast!";
			slaying = false;
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", dragon_slayer, false);
} else if(window.attachEvent){
	window.attachEvent("onload", dragon_slayer);
}
