import { createStore } from 'redux' 

const CHANGE_MAIN = 'CHANGE_MAIN'
const CHANGE_DISPLAY = 'CHANGE_DISPLAY'
const SWITCH = 'SWITCH' 

const initState= {
    isOn : true,
    isMainBank: true,
    display: "DEFAULT",
}

export function changeMain() {
    return {
        type: CHANGE_MAIN
    }
}

export function switchDrum() {
    return {
        type: SWITCH
    }
}

export function changeDisplay(message) {
    return {
        type: CHANGE_DISPLAY, 
        display: message
    }
}

export const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case CHANGE_MAIN:
            return Object.assign({}, state, {display: !state.isMainBank});
        case CHANGE_DISPLAY:
            return Object.assign({}, state, {display: action.display});
        case SWITCH:
            return Object.assign({}, state, {isOn: !state.isOn});
        default:
            return state
    }
}

export const store = createStore(rootReducer)