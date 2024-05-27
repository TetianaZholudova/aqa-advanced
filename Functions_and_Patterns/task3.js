
function divideNumbers(numerator, denominator){
    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number'){
      return ('Error occured') 
    }
    else {
        return numerator/denominator
    }
}

console.log(divideNumbers(40, 8))
console.log(divideNumbers(45, null))
console.log(divideNumbers(25, 'String'))
console.log(divideNumbers(100, 0))
console.log(divideNumbers(15, undefined))
console.log(divideNumbers(40, 8))
console.log(divideNumbers(null, 5))
console.log(divideNumbers('String', 5))
console.log(divideNumbers(0, 5))
console.log(divideNumbers(undefined, 6))


try {    
console.log(divideNumbers(42, 0))
}
catch (error) {
console.log("Error message")
}
finally {
console.log("Робота завершена")
}

try {  
divideNumbers(40, 0)
}
catch (error) {
console.log('The denominator can not be equal zero')
}
finally {
    console.log("Робота завершена")
}

try {    
    console.log(divideNumbers(40, 'String'))
}
catch (error) {
console.log('The denominator can not be String')
}
finally {
    console.log("Робота завершена")
}

try {    
    console.log(divideNumbers(40, null))
}
catch (error) {
console.log('The denominator can not be null')
}
finally {
    console.log("Робота завершена")
}



// я хотіла, щоб в цьому завданні, після обгортання функціі в try.....catch, я могла виводити інше кастомне повідомлення, яке прописане в блоці catch.
// Але воно не виводиться. Виводиться помилка з самоі функціі і таке враження, що до блоку catch воно не доходить.    

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































