import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default ( state = initialState, action ) => {
    const { type, payload } = action
    switch(type) {
        case GET_TECHS: {
            return {
                ...state,
                techs: payload,
                loading: false
            }
        }
        case ADD_TECH: {
            return {
                ...state,
                techs: [...state.techs, payload],
                loading: false
            }
        }
        case DELETE_TECH: {
            return {
                ...state,
                techs: state.techs.filter( t => t.id !== payload),
                loading: false
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case TECHS_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        default: {
            return state
        }
    }
}