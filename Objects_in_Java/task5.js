
const users = [
    {
      name: 'Robert',
      email: 'robert@example.com',
      age: 25,
      city: 'Chicago'
    },
    {
      name: 'Nancy',
      email: 'nancy@example.com',
      age: 30,
      city: 'Boston'
    },
    {
      name: 'Heath',
      email: 'heath@example.com',
      age: 35,
      city: 'New York'
    }
  ];
  
  for (const {name, email, age, city} of users){
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}, City: ${city}`)
  }