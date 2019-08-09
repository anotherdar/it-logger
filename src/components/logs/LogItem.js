import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { deleteLog, setCurrent } from '../../actions/logAction'
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent}) => {
    const { attention, tech, id, date } = log
    const onDelete = () => {
        deleteLog(id)
        M.toast({ html: 'Log deleted', classes: 'teal darken-3'})
    }
    return (
        <li className="collection-item">
            <div>
                <a 
                    className={`modal-trigger ${attention ? ' red-text' : ' grey-text text-darken-3'}`} 
                    href="#edit-log-modal"
                    onClick={()=> setCurrent(log)}
                >
                    {log.message}
                </a>

                <br/>

                <span className="grey-text">
                    <span className="teal-text lighten-2"> ID #<strong>{id}</strong></span>{' '}
                    last updated by {' '}
                    <span className="teal-text text-darken-4"> <strong>{ tech }</strong> </span>
                    on {' '} <Moment format='MMM Do YYYY, h:mm:ss a'>{ date }</Moment>
                </span>

                <a href="#!" onClick={onDelete} className="secondary-content waves-effect waves-dark">
                    <i className="material-icons grey-text text-darken-1">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
