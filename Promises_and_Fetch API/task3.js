

    let filmResponse = await fetch(`https://swapi.dev/api/films/3/`);
    let planeData = await filmResponse.json();
    let planetUrls = planeData.planets;

    console.log(planetUrls);

    let arrayOfPlanetUrls = planeData.planets;
    for (let i = 0; i < arrayOfPlanetUrls.length; i++) {
        fetch(arrayOfPlanetUrls[i])
            .then((res) => res.json())
            .then((json) => {
                let arrayOfResidentsUrls = json.residents;
                for (let j = 0; j < arrayOfResidentsUrls.length; j++) {
                    fetch(arrayOfResidentsUrls[j])
                        .then((residentsResponse) => residentsResponse.json())
                        .then((residentName) => console.log(residentName.name))

                }
            })
            .catch((error) => {
                console.error('Error fetching planet data:', error);
            });
    }

    // в цьому завданні не розумію, як добитися формату, який ти описав в домашці, щоб була назва планети і резидент.  
   

  