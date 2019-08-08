import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const LogItem = ({ log }) => {
    const { attention, tech, id, date } = log
    return (
        <li className="collection-item">
            <div>
                <a 
                    className={`modal-trigger ${attention ? ' red-text' : ' grey-text text-darken-3'}`} 
                    href="#edit-log-modal">
                    {log.message}
                </a>

                <br/>

                <span className="grey-text">
                    <span className="teal-text lighten-2"> ID #<strong>{id}</strong></span>{' '}
                    last updated by {' '}
                    <span className="teal-text text-darken-4"> <strong>{ tech }</strong> </span>
                    on {' '} <Moment format='MMM Do YYYY, h:mm:ss a'>{ date }</Moment>
                </span>

                <a href="#!" className="secondary-content waves-effect waves-dark">
                    <i className="material-icons grey-text text-darken-1">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem
