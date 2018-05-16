let arrCards = [];
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];

// $('.fichas').each(function(){
// 	const imgfront = "<img src='img/front-img.jpg'/>";
// 	let index = $('.fichas').index(this);
// 	$('.fichas').eq(index).append(imgfront);
// })


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
}
arr=shuffleImg(arr);

function addImg (a) {

		
			$('.fichas').each(function(i) {
				const img1 = "<img src='img/img1.jpeg'/>"
				if (i<=3) {
					const img ='<div class="fichas" data-src= "<img src="img/img1.jpeg"/>"> <img src="img/front-img.jpg"/></div>';
					$('.fichas').data("src");
					console.log($(this))
					$(this).append(img);
					console.log($(this))

					const card = $('.fichas-back')[i];
					arrCards.push(card);
				}else if (i>=4 && i<8) {
					const img2 = "<img class='fichas-back' src='img/img2.jpeg'/>";	
					$(this).append(img2);
					const card = $('.fichas-back')[i];
					arrCards.push(card);
				}else {
					const img3 = "<img class='fichas-back' src='img/img3.jpeg'/>";
					$(this).append(img3);
					const card = $('.fichas-back')[i];
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

	}
	return newArr;
}
newArr=shuffle(arr,arrCards)

$(document).on('click','.pepe', function (){
	
})

function cargar (a){
	console.log('hola')
	for(var i = 0; i < newArr.length; i++){
		$('.fichas-container').append(newArr[i]);
	}
	return newArr
}

newArr = cargar(newArr);



$(document).on('click','.fichas-front',function(){
	console.log('muerte');
	var index = $('.fichas-front').index(this);

	


})

