export function getCharacters() {
  return fetch("https://www.swapi.tech/api/people")
    .then((res) => res.json())
    .then((data) => {
      //console.log("este es lo que llega",data.results);
      return data.results;
    })
    .catch((err) => console.error(err));
}
export function getPlanets() {
  return fetch("https://www.swapi.tech/api/planets")
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));
}
export function getStarships() {
  return fetch("https://www.swapi.tech/api/starships")
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));
}
export function getCharacter(id) {
  return fetch(`https://www.swapi.tech/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.results);
      return data
    })
    .catch((err) => console.error(err));
}
export function getPlanet(id) {
  return fetch(`https://www.swapi.tech/api/planets/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((err) => console.error(err));
}
export function getStarship(id) {
  return fetch(`https://www.swapi.tech/api/starships/${id}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      return data
    })
    .catch((err) => console.error(err));
}
