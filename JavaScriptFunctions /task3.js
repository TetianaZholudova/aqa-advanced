function checkOrder(available, ordered) {
	if (available < ordered) {
		console.log('Your order is too large, we do not have enough goods.');
	} else if (ordered === 0) {
		console.log('Your order is empty');
	} else if ((available >= ordered && available != null) || ordered != null) {
		console.log('Your order is accepted');
	} else if (available === null || ordered === null) {
		console.log('Your order contains invalid data');
	} else {console.log('Something went wrong');}
}
checkOrder(7, 8);
