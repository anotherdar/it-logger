import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';

//get logs
export const getLogs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs')
        const data = await res.json()
        
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}
//add a new log
export const addLog = log => async dispatch => {
    try {
        setLoading()

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({
            type: ADD_LOG,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}
//delete log 
export const deleteLog = id => async dispatch => {
    try {
        setLoading()

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}
//update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoading()

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({
            type:  UPDATE_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}
//seacrh log
export const searchLogs = text => async dispatch => {
    try {
        setLoading()

        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json()
        
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}
// set current log 
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}
//clear current
export const clearCurrent = () => ({ type: CLEAR_CURRENT })
//set loading
export const setLoading = () => ({ type: SET_LOADING })