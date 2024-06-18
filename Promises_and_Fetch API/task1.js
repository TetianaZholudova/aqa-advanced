let firstTenPlanets = []

for (let i = 1; i < 11; i++){
let callToApi = await fetch(`https://swapi.dev/api/planets/${i}/`)
let allPlanetsData = await callToApi.json()

firstTenPlanets.push(allPlanetsData.name)

}
console.log(firstTenPlanets)

let promisesArray = []
for (let i = 1; i < 11; i++){
    promisesArray.push(fetch(`https://swapi.dev/api/planets/${i}/`)
    .then((res) => res.json())
    .then((json) => json.name)
    )  
}
const firstTenPlanets1 = await Promise.all(promisesArray)
console.log(firstTenPlanets1)

