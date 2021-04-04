import types from "../types"

const initialState = {
    favorities: []
}

const favoriteReducer = (state, action) => {
    switch (action.type){
        case types.addToFavorite:
            const newFavorite = action.payload
            // Lo que hace containtFavorite es comprobar si ya existe ese elemento para que solo sumemos sobre el
            const containtFavorite = state.favorities.find(
                i => i.id === newFavorite.id
            )
            return containtFavorite
            ?
            {
                ...state,
                favorities: state.favorities.map(i => (
                    i.id === newFavorite.id
                    ? {...i, quantity: i.quantity + 1}
                    : i
                ))
            }
            :
            {
                ...state,
                favorities: [...state.favorities, {...action.payload, quantity: 1}]
            }
        case types.removeToFavorite:
            return {
                ...state,
                favorities: state.favorities.filter(i => i.id !== action.payload)
            }
        default: 
            return state
    }
}

export { initialState }
export default favoriteReducer 