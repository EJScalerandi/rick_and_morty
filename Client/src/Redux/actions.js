export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_STORE_NAME = "GET_STORE_NAME";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const filterCards = gender => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = id => {
    return {
        type: ORDER,
        payload: id,
    };
};

export const addFav = pj => {
    return {
        type: ADD_FAV,
        payload: pj,
    };
};

export const removeFav = id => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};
