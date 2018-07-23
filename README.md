## Basic Redux App

This simple app is designed to show data flow through Redux. You'll notice in my reducer file I do not use "Object.assign." Instead you'll see the following code: 

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_INFO :
        return {...state, ...action.payload}
    default: 
        return state
    }
}

Spread operators in object literals will only update the values that change. You'll notice that 'name' and 'city' change, but 'st' in redux remains unchanged. The value passed in on action.payload is the entirety of local state. So long as these properties have the same names, you can use the spread operator to overwrite values in redux state. 

Spread operators create new objects, which is why we don't need the empty object at the beginning like we do with Object.assign({}, state, action.paylod). 

Hope this helps someone better understand Redux!