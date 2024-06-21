function calculateAreaOfRectangle(height, width) {
	return height * width;
}
console.log('Area Of Rectangle is', calculateAreaOfRectangle(5, 10));

const AreaOfRectangle = function (height, width) {
	return height * width;
};
console.log('Area Of Rectangle is', AreaOfRectangle(5, 10));

const AreaOfRectangle1 = (height, width) => height * width;
console.log('Area Of Rectangle is', AreaOfRectangle1(5, 10));
