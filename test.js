//let text = 'The website url is https://www.npmjs.com/search?q=chalk';
//console.log(text.slice(text.indexOf('chalk'), -2));

const { Console } = require("console");

//console.log(text.length); // Виведе: 10

//console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
//console.log(text.toLowerCase());



//console.log(text.charAt(3)); // Виведе: "a"

//console.log(text.indexOf("is")); // Виведе: 4

//console.log(text.substring(20)); // Виведе: "Script"
//console.log(text.slice(20)); // Виведе: "Scr"

//let dateFormat = 05052024; 
//console.log(dateFormat.toLocaleString('es-ES'));  

//console.log(text.endsWith("Script")); // Виведе: true



//console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"

//console.log(text.replaceAll("a", "A")); // Виведе: "JAvAScript"

//let number = 67876778;
//console.log(number.toLocaleString())  //toLocaleString('es-ES'));


//let fruits = 'apple,cucumber,pear,banana,orange'; 

//let fruits = 'apple,cucumber,pear,banana,orange'.split(',');  

//console.log('     Hello                   World       '.trim())

//let mood = 'Happy! '
//console.log(`I feel very ${mood.repeat(5)}`); 

//let date = new Date(5, 5, 2024);

//console.log(date.toLocaleDateString());

//let abc = 6;
//abc = abc + 1; // Інкремент-працює так само, як counter = counter + 1, але запис коротше
//console.log(abc); // 3

//let abd = 6;
//++abd; // Інкремент-працює так само, як counter = counter + 1, але запис коротше
//console.log(abd); // 3



//let personAge = 34;  
//if(personAge >= 18) {
 //   console.log('Person is adult')
//}
//else {console.log('Person is not adult')
//}

//console.log('' == 0)
//console.log('' === 0)

//let userName = "Jack" 
//f(10>5 && ("Hello" == "1Hello") || 123 || 456 || 345) 
//console.log("This is true");
//else {
//    console.log("This is false");

//}




//let personAge = 17; 
//let isAdult = personAge >= 18; 
//console.log('Person is adult?', isAdult)
  

//let personAge = 15; 
//if(personAge>=18) {
//console.log('User is adult') 
//}
//else {
//    console.log('User is not adult')  
//} 

//let personAge = 25; 
//console.log(personAge>=18 ? 'User is adult' :'User is not adult')

//const averageGrade = 100
//if(averageGrade < 60){
  //  console.log('Незадовільно')
//}
//else if(averageGrade >= 60 && averageGrade <= 70){
  //  console.log('Задовільно') 
//}   
//else if(averageGrade >= 71 && averageGrade <= 80){
//console.log('Добре') 
//}   
//else if(averageGrade >= 81 && averageGrade <= 90){
 //   console.log('Дуже добре') 
   // } 
//else if (averageGrade >= 91 && averageGrade <= 100){
  //      console.log('Відмінно') 
    //    }

    const averageGrade = 67

    switch (true) {
    case averageGrade < 60:
        console.log('Незадовільно');
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log('Задовільно');
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log('Добре');
        break;
    case averageGrade >= 81 && averageGrade <= 90:
            console.log('Дуже добре');
            break;
    case averageGrade >= 91 && averageGrade <= 100:
                console.log('Відмінно');
                break;

    }

    
    const number = 4
    for (i = 1; i <= 10; i++) {
        console.log(`4 x ${i} =`, number * i)
      }

    let count = 1;
    const number1 = 4 
    while (count <= 10) {
          console.log(`4 x ${count} =`, number1 * count); // Виведе числа 0, 1, 2
          count++;
      }  