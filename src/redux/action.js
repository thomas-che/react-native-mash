export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_API_CALL = 'GET_API_CALL';

const API_URL = "https://reactnative.dev/movies.json"

export const getApiCall = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-type': 'application-json'
                }
            });
            const json = await result.json();
            if(json){
                dispatch({type: GET_API_CALL, payload: json.movies})
            } else {
                console.log('ERROR Convertion en Json du result');
            }
        }

    } catch (error) {
        console.log('ERROR API');
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    })
}

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    })
}

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    })
}