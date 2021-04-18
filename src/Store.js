import { createStore } from 'redux' 

const CHANGE_MAIN = 'CHANGE_MAIN'
const CHANGE_DISPLAY = 'CHANGE_DISPLAY'
const CHANGE_VOLUME = 'CHANGE_VOLUME'
const SWITCH = 'SWITCH' 

const initState= {
    isOn : true,
    isMainBank: false,
    display: "DEFAULT",
    volume: 50,
}

export function changeMain() {
    return {
        type: CHANGE_MAIN
    }
}

export function changeDisplay(message) {
    return {
        type: CHANGE_DISPLAY, 
        display: message
    }
}

export function changeVolume(volume) {
    return {
        type: CHANGE_VOLUME, 
        volume: volume
    }
}

export function switchDrum() {
    return {
        type: SWITCH
    }
}


export const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case CHANGE_MAIN:
            return Object.assign({}, state, {isMainBank: !state.isMainBank});
        case CHANGE_DISPLAY:
            return Object.assign({}, state, {display: action.display});
        case SWITCH:
            return Object.assign({}, state, {isOn: !state.isOn});
        case CHANGE_VOLUME:
            return Object.assign({}, state, {volume: action.volume});
        default:
            return state
    }
}

export const store = createStore(rootReducer)