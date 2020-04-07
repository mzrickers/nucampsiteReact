import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: false, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: false, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: true, campsites: action.payload};
        default:
            return state;
    }
};