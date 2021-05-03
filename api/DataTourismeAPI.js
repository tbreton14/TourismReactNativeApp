const api_key = "f7a910eb-4c42-43fd-bdf8-e9257ccb9d2f";
const urlDataTourisme = 'https://diffuseur.datatourisme.gouv.fr/webservice/538799b6af8c7e3f5ada7b5df196ad7d/';

export function getRestaurantsCalvados() {
    console.log('getRestaurantsCalvados')
    const url = urlDataTourisme + api_key;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
