let test = await fetch('https://swapi.dev/api/films/3/')
let body = await test.json()
console.log(body.planets)