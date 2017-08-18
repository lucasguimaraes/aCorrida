var animationTimePeriod = 1000;

//gera numero aleatorio entre 1 e 90 para fazer os bixo correrem
function radomMargin() {
	var randomNum1 = Math.floor((Math.random() * 90) + 1);
	return randomNum1;
}

//funcão para alertar quem ganhou
function onAnimalWin(animal) {
	alert("O " + animal.toUpperCase() + " GANHOU !");
}

//funcão para fazer correr
$('#correr').click(function() {
	$('#cachorroStop').hide();
	$('#cachorroRun').show();
	$('#gatoStop').hide();
	$('#gatoRun').show();

	$('#cachorro')[0].style['margin-left'] = '0px';
	$('#gato')[0].style['margin-left'] = '0px';
	var dog = radomMargin();
	var cat = radomMargin();
	var times = 0;

	while(dog < 700 && cat < 700) {
	
		$('#cachorro').animate({
			marginLeft: dog,
		}, animationTimePeriod);

		$('#gato').animate({
			marginLeft: cat,
		}, animationTimePeriod);

		dog += radomMargin();
		cat += radomMargin();	

		times++;
	}

	setTimeout(function(){
		onAnimalWin(dog > cat ? 'cachorro' : 'gato');
	}, times*animationTimePeriod + 2);
	
});

