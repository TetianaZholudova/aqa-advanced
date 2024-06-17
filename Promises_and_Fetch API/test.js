// there are two methods to work with promises  

fetch('https://swapi.dev/api/species/7/')
.then((res) => res.json())
.then((json) => console.log(`Color; ${json.eye_colors}; Destination: ${json.designation}`)) 


let callToApi = await fetch('https://swapi.dev/api/species/12/')
let spaceName = await callToApi.json()

console.log(`Name: ${spaceName.name}`)

