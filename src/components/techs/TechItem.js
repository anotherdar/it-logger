import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({tech, deleteTech}) => {
    const { firstName, lastName, id} = tech
    const onDelete = () => {
        deleteTech(id)
        M.toast({
            html: 'Tech deleted',
            classes: 'teal darken-3'
        })
    }
    return (
        <li className="collection-item">
            <div>
                <span className="-text text-lighten-3">{firstName} {lastName}</span>
                <a href="#!" className="secondary-content waves-effect waves-black" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)
