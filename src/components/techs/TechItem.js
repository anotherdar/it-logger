import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({tech}) => {
    const { firstName, lastName} = tech

    return (
        <li className="collection-item">
            <div>
                <span className="-text text-lighten-3">{firstName} {lastName}</span>
                <a href="#!" className="secondary-content waves-effect waves-black">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default TechItem
