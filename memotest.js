
// El juego de memotest deber· cumplir las siguientes consignas:

// 1- Tener un tablero de 12 fichas (6 pares)
// 2- Deben acomodarse las fichas de forma aleatoria, cada vez que se inicie un nuevo juego.
// 3- Al completar todos los pares mostrar un mensaje de ganÛ. 
// 4- Permitir ingresar el nombre del jugador al iniciar el juego
// 5- Tener 24 oportunidades, si no descubre todo el tablero en esa cantidad perder·.



let arrCards = [];
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];
const img1 = "<img class='fichas-back'src='img/img1.jpeg'/>";
const img2 = "<img class='fichas-back' src='img/img2.jpeg'/>";
const img3 = "<img class='fichas-back' src='img/img3.jpeg'/>";
const imgfront = "<img class='front' src='img/front-img.jpg'/>";


$(window).on('load',function(){
	$('.fichas-container').addClass('notshow');
	$('.fichas-back').addClass('notshow');
	$('.must-container').hide();

})

$(document).on('click', '.button' , function () {
	if ($('input').val()=='') {
		$('.must-container').fadeIn(1000).show();
		$('.main-container').fadeOut(1000).hide();
	}
	if ($('input').val()!='') {
		$('.must').hide();
		$('.fichas-container').fadeIn(2000);
		$('.fichas-container').css({display: "flex" });
		$('.fichas-container').removeClass('notshow');
	}
})

$(document).on('click','#must-b', function() {
	$('.must-container').fadeOut(1000).hide();
	$('.main-container').fadeIn(1000).show();


})
function shuffleImg (a) {

for(var i = arr.length; i; i--){
	let index = Math.floor(Math.random()*i);
	let num = arr[i-1]
	arr[i-1] = arr[index];
	arr[index] = num;
	
	}
// console.log (arr); 
return arr
// newArr = shuffleImg(newArr);
// console.log(newArr)
}
arr=shuffleImg(arr);

function addImg (a) {
	// const length = 12

	// for(var i = 0; i<length; i++){
		
			$('.fichas').each(function(i) {
				if (i<=3) {
					
					$('.fichas').eq(i).append(img1,imgfront);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}else if (i>=4 && i<8) {	
					$(this).append(imgfront,img2);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}else {
					$(this).append(img3,imgfront);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}

			})
			return arrCards;
	

}
arrCards=addImg(arrCards)


function shuffle (a,b) {
	
	for(var i = 0; i < arr.length; i++){
		

		var j = arr.indexOf(i);
		newArr.push(arrCards[j])
		arrCards[j]=newArr[i];
		;
	}
	return newArr;
	 
}
newArr=shuffle(arr,arrCards)
// console.log(newArr);

$(document).on('click','.pepe', function (){
	// console.log('hola')
	
	// $('.fichas-container-front').addClass("notshow");
	// $('.fichas-container-back').removeClass("notshow");
	// for(var i = 0; i < newArr.length; i++){
	// 	console.log(newArr[i]);

	// }
	// console.log(newArr[1]);
})

function cargar (a){
	console.log('hola')
	for(var i = 0; i < newArr.length; i++){
		$('.fichas-container').append(newArr[i]);
	}
	return newArr
}

newArr = cargar(newArr);
// console.log(newArr)

	let pair = [];
	let pairDiv=[];
	let div = [];
	let counter = 0
	
$(document).on('click','.fichas',function(){
	
	console.log(counter)
	let index = $('.fichas').index(this);
	const front = $('.front').eq(index);
	const back = $('.fichas-back').eq(index)

	if (pair.length<2) {
		
		let cardFront = $(this).children('.front');
		let cardBack = $(this).children('.fichas-back');
		// console.log(cardFront);

		pair.push(back.attr('src'));
		pairDiv.push(cardFront);
		pairDiv.push(cardBack);
		div.push($(this))
		// console.log(pairDiv);
		console.log(div);
		// front.hide(1).delay(400).hide(1);
		// back.show(1).delay(400).hide(1);
		front.addClass('notshow');
		back.removeClass('notshow');



		

		if (pair[0]==pair[1]) {
			counter++
		  console.log('yaaaay')
		  for(var i = 0; i < pairDiv.length; i++){
				pairDiv[i].fadeOut(2000)
				pairDiv[i].parent().addClass('pointer')
		  }
		  // div[0].addClass('cardss');	
		  // div[1].removeClass('fichas');
		  pair.length=0
		  pairDiv.length=0
		  div.length=0
		  
			
		}
		
		else if (pair.length>1){
			counter++
			console.log('neeiii')
			// pairDiv[0].hide(1).delay(1000).show(1);
			// pairDiv[1].show(1).delay(1000).hide(1);
			// pairDiv[0].toggleClass('notshow');
			// pairDiv[1].toggleClass('notshow');
			// pairDiv[2].removeClass('notshow');
			// pairDiv[3].addClass('notshow')
			setTimeout(function() {
				console.log(pairDiv)
				pairDiv[0].toggleClass('notshow');
				pairDiv[1].toggleClass('notshow');
				pairDiv[2].removeClass('notshow');
				pairDiv[3].addClass('notshow')
				pairDiv.length=0
				pair.length=0
				div.length=0
			}, 1000)
			
		}

		if(counter>24) {
			const lost = "<h1 class='lost'>P E R D I S T E E E </h1>"
			$('.fichas-container').fadeOut(2000);
			$('fichas-container').hide;
			$('.main-container').prepend(lost).fadeIn(2000);
		}
		// else{
				
		// 		console.log('que carajo estoy haciendo')
		// 	}
		// 	else{
		// 		console.log('neeiii')
		// }
	}




			
			// igual = $('.fichas-back').eq(index).attr('src');
			// if (igual=="img/img1.jpeg") {
			

			// } else {
			// 		if (igual == "img/img2.jpeg") {
			// 			$('.front').eq(index).addClass('notshow');
			// 			$('.fichas-back').eq(index).removeClass('notshow');
			// 		} else {
			// 			// statement
			// 		}
			// 	// statement
			// }
  
$('.turnNum').html(counter);


})


