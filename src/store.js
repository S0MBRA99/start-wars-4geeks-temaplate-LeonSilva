export const initialStore=()=>{
  return{
    characters: [],
    planets: [],
    starships: [],
    liked: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'setCharacters':

      const {charactersObj } = action.payload

      return {
        ...store,
        characters: charactersObj,
      };
    
    case 'setPlanets':

      const {planetsObj } = action.payload

      return {
        ...store,
        planets: planetsObj,
      };

    case 'setStarships':

      const { starshipsObj } = action.payload

      return {
        ...store,
        starships: starshipsObj,
      };
    
    case 'setLiked':  

      const {likedObj} = action.payload

      return {
        ...store,
        liked: [...store.liked,likedObj]
      };

    case 'deleteLiked':

      const {dislikeObj} = action.payload

      return {
        ...store,
        liked: dislikeObj
      }

    default:
      throw Error('Unknown action.');
  }    
}
