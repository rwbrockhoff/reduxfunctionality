const initialState = {
    name: "Johnny",
    city: '',
    st: ''
}

const UPDATE_NAME = 'UPDATE_NAME';

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_NAME :
        return Object.assign({}, state, {name: action.payload})
    default: 
        return state
    }
}

export function updateName(val){
    return {
        type: UPDATE_NAME,
        payload: val
    }
}