import { Coords } from '../data/data'

const INITIAL_STATE = {};

enum ActionTypes {
    GET_DATA = 'GET_DATA',
    SAVE_DATA = 'SAVE_DATA',
    SHOW_DATA = 'SHOW_DATA',
    CHANGE_METRICS = 'CHANGE_METRICS'
}
//Reducer
export const weatherReducer = (state = INITIAL_STATE, action : {type : ActionTypes, payload: {}}) => {
    switch(action.type){
        case ActionTypes.GET_DATA:
            return {

            }
        case ActionTypes.SAVE_DATA:
            return {

            }
        case ActionTypes.SHOW_DATA:
            return {

            }
        case ActionTypes.CHANGE_METRICS:
            return {

            }
        default:
            return state;
    }
}
// Action Creators

export const getData = (coords : Coords) => {
    return {
        type: ActionTypes.GET_DATA,
        payload: coords
    }
}

export const saveData = (data : {}) => {
    return {
        type: ActionTypes.SAVE_DATA,
        payload : data
    }
}

export const showData = () =>{
    return {
        type: ActionTypes.SHOW_DATA
    }
}