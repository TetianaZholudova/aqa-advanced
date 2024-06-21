function handleEven() {
	console.log('Number is even');
}

function handleOdd() {
	console.log('Number is odd');
}
function handleNum(number, handleEven, handleOdd) {
	if (number % 2 == 1) {
		return handleOdd();
	} else if (number % 2 == 0) {
		return handleEven();
	} else {console.log('An error occured');}
}
handleNum(9, handleEven, handleOdd);
