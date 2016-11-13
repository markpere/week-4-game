$(document).ready(function(){

	var calculatedScore = 0;
	var wins = 0;
	var losses = 0;
	var random = Math.floor(Math.random()*120) + 19;
	var valueCrystalOne = Math.floor(Math.random()*12) + 1;
	var valueCrystalTwo = Math.floor(Math.random()*12) + 1;
	var valueCrystalThree = Math.floor(Math.random()*12) + 1;
	var valueCrystalFour = Math.floor(Math.random()*12) + 1; 
	$("#randomNumber").html(random);


console.log (valueCrystalOne);
console.log (valueCrystalTwo);
console.log (valueCrystalThree);
console.log (valueCrystalFour);

function reset() {
	var newRandomNumber = Math.floor(Math.random()*120) + 19;
	$("#randomNumber").html(newRandomNumber);
	randomNumber = newRandomNumber;
	calculatedScore = 0;
	$("#newScore").html(calculatedScore);
	valueCrystalOne = Math.floor(Math.random()*12) + 1;
	valueCrystalTwo = Math.floor(Math.random()*12) + 1;
	valueCrystalThree = Math.floor(Math.random()*12) + 1;
	valueCrystalFour = Math.floor(Math.random()*12) + 1;


} //closes reset function


$("#crystalOne").on("click", function(){
	calculatedScore += valueCrystalOne;
	$("#newScore").html(calculatedScore);
	$('#rupee').get(0).play();

	if (calculatedScore > random) {
		losses ++;
		$("#losses").html("Losses: " + losses);
		$('#hurt').get(0).play();
		reset ();
	} else if (calculatedScore == random) {
		wins++;
		$("#wins").html("Win total: " + wins);
		$('#fanfare').get(0).play();
		reset ();
	};


}); //closes crystalOne.on click function

$("#crystalTwo").on("click", function(){
	calculatedScore += valueCrystalTwo;
	$("#newScore").html(calculatedScore);
	$('#rupee').get(0).play();

	if (calculatedScore > random) {
		losses ++;
		$("#losses").html("Losses: " + losses);
		$('#hurt').get(0).play();
		reset ();
	} else if (calculatedScore == random) {
		wins++;
		$("#wins").html("Win total: " + wins);
		$('#fanfare').get(0).play();
		reset ();
	};

}); //closes crystalTwo.on click function

$("#crystalThree").on("click", function(){
	calculatedScore += valueCrystalThree;
	$("#newScore").html(calculatedScore);
	$('#rupee').get(0).play();

	if (calculatedScore > random) {
		losses ++;
		$("#losses").html("Losses: " + losses);
		$('#hurt').get(0).play();
		reset ();
	} else if (calculatedScore == random) {
		wins++;
		$("#wins").html("Win total: " + wins);
		$('#fanfare').get(0).play();
		reset ();
	};

}); //closes crystalThree.on click function

$("#crystalFour").on("click", function(){
	calculatedScore += valueCrystalFour;
	$("#newScore").html(calculatedScore);
	$('#rupee').get(0).play();

	if (calculatedScore > random) {
		losses ++;
		$("#losses").html("Losses: " + losses);
		$('#hurt').get(0).play();
		reset ();
	} else if (calculatedScore == random) {
		wins++;
		$("#wins").html("Win total: " + wins);
		$('#fanfare').get(0).play();
		reset ();
	};


}); //closes crystalFour.on click function


	
}); //closes document.ready
