import React, {useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter the first and last name', classes: 'red'})
        } else {
            const newTech = {
                firstName,
                lastName
            }
            addTech(newTech)
            M.toast({html: 'technician added', classes: 'teal darken-3'})
            clearFields()
        }
        
    }
    const clearFields = ()=> {
        setFirstName('')
        setLastName('')
    }
    return (
        <div id='add-tech-modal' className='modal' >
            <div className="modal-content">
                <h4 className="teal-text text-darken-3">New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firtstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firtstName" className="active">First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-black btn teal white-text ">
                    Enter
                </a>
            </div>
        </div>
    )
}
AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)

