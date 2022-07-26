import { SET_USER_NAME, SET_USER_AGE, INCREASE_AGE, GET_API_CALL } from "./action";

const initialSate = {
    name: '',
    age: 0,
    movies: []
}

function userReducer(state=initialSate, action){
    switch (action.type) {
        case SET_USER_NAME:
            return {...state, name: action.payload};
        case SET_USER_AGE:
            return {...state, age: action.payload};
        case INCREASE_AGE:
            return {...state, age: state.age + 1}; 
        case GET_API_CALL:
            return {...state, movies: action.payload}; 
        default:
            return state;
    }
}

export default userReducer;