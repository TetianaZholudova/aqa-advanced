function iterativeCounter(num) {
	while (num >= 0) {
		console.log(num);
		num--;
	}
}
iterativeCounter(5);

function recursiveCounter(num) {
	console.log(num);
	if (num > 0) {
		recursiveCounter(num - 1);
	}
}
recursiveCounter(5);

// тут використала два варіанти: виклик рекурсивноі функціі і через while, як ти розповідав на лекціі
