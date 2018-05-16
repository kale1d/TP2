let arrCards = [];
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];
const img1 = "<img class='fichas-back'src='img/img1.jpeg'/>";
const img2 = "<img class='fichas-back' src='img/img2.jpeg'/>";
const img3 = "<img class='fichas-back' src='img/img3.jpeg'/>";
const imgfront = "<img class='front' src='img/front-img.jpg'/>";

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
	$('.fichas').each(function(i) {
		if (i<=3) {
			$(this).append(img1, imgfront);
			const card = $(this)[i];
				arrCards.push(card);
		}else if (i>=4 && i<8) {
			$(this).append(imgfront, img2);
			const card = $(this)[i];
			arrCards.push(card);
		}else {
			$(this).append(img3,imgfront);
			const card = $(this)[i];
			arrCards.push(card);
		}

			})
			return arrCards;
		

}

arrCards=addImg(arrCards)

function shuffle (a,b) {
	// length1 = arrCards.length
	// console.log(length1);
	// console.log(arr);
	for(var i = 0; i < arr.length; i++){
		// console.log(arrCards[i],'a')
		// console.log(arr[i],'b')

		var j = arr.indexOf(i);
		newArr.push(arrCards[j])
		arrCards[j]=newArr[i];
		// console.log(newArr)
		// console.log(j);
		// console.log(arr[i]);
	}
	return newArr;
	// console.log(newArr,'a')	 
}
newArr=shuffle(arr,arrCards)

