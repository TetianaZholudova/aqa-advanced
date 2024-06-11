fetch('https://swapi.dev/api/people/14/')
.then((res) => res.json())
.then((json) => console.log(json.starships))


let shipOwner = await fetch('https://swapi.dev/api/people/14/')
let starShipName = await shipOwner.json()
console.log(starShipName.starships)