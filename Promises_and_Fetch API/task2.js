fetch('https://swapi.dev/api/people/14/')
.then((res) => res.json())
.then((json) => {
    let arrayOfStarshipsUrls = json.starships
for (let i = 0; i < arrayOfStarshipsUrls.length; i++){
    fetch(arrayOfStarshipsUrls[i])
    .then((res) => res.json())
    .then((json) => console.log(json.name))

    }
}

)

let shipOwner = await fetch('https://swapi.dev/api/people/14/')
let starShipName = await shipOwner.json()
console.log(starShipName.starships)

let arrayOfStarshipsUrls = starShipName.starships
for(let i = 0; i < arrayOfStarshipsUrls.length; i++){
    fetch(arrayOfStarshipsUrls[i])
    .then((res) => res.json())
    .then((json) => console.log(json.name))

    }


