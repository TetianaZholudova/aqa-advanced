
function divideNumbers(numerator, denominator){
    if (denominator === 0) {
      throw new Error ('Devision by zero is impossible') 
    }
    if (typeof numerator !== 'number'){
        throw new Error ('Numerator should be a number')
    } 
    if (typeof denominator !== 'number'){
        throw new Error ('Denominator should be a number') 
    }
        else {
        return numerator/denominator
    }
}

try {
    console.log(divideNumbers(40, 8))
} 
catch (error) {
    console.error(error.message);
}
finally {
    console.log("Робота завершена")
}