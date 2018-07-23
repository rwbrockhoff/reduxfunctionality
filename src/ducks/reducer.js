const initialState = {
    name: "Johnny",
    city: "Tacoma",
    st: ''
}

const UPDATE_INFO = 'UPDATE_INFO';

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_INFO :
        return {...state, ...action.payload}
    default: 
        return state
    }
}

export function updateInfo(val){
    return {
        type: UPDATE_INFO,
        payload: val
    }
}