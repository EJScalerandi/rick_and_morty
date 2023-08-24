import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from './actions';

const initialState = {
    myFavorite: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            // Logica
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload], // Agregar al arreglo allCharacters
                myFavorite: [...state.myFavorite, action.payload],
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorite: state.myFavorite.filter(el => el.id !== action.payload),
            };

        case FILTER:
            let { allCharacters } = state;
            return {
                ...state,
                myFavorite: allCharacters.filter(el => el.gender === action.payload),
            };

        case ORDER:
            const sortedCharacters = state.myFavorite.slice().sort((a, b) => {
                if (action.payload === 'A') {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }
            });
            return {
                ...state,
                myFavorite: sortedCharacters,
            };

        default:
            return state;
    }
};

export default rootReducer;
