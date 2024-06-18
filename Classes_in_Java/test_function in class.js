class Person {
constructor(name, age, hobby){
this.name = name; 
this.age = age; 
this.hobby = hobby;   

}

sayHi() {
    console.log(`My name is ${this.name}, I am ${this.age} years old and I am keen on 
    ${this.hobby}`)
} 

doublePersonAge (){    
    let doublePersonAge = this.age * 2;  
return doublePersonAge
}
}

let person1 = new Person ('Alice', 25, 'knitting')


person1.sayHi(); 

let personAge = person1.doublePersonAge(); 
console.log(`Person double age is: ${personAge}`); 


