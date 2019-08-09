import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logAction'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'
//componets
import TechSelectOptions from '../techs/TechSelectOptions'

const EditLogModal = ({ current , updateLog }) => {
    const [ message, setMessage ] = useState('')
    const [ attention, setAttention ] = useState(false)
    const [ tech, setTech ] = useState('')
    
    useEffect(()=> {
        if(current) {
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    }, [current])
    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech', classes: 'red'})
        } else {
            const upLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            }
            updateLog(upLog)
            M.toast({ html: `Log succesfully update by ${tech}`, classes: 'teal darken-3'})
            clearFields()
        }
    }
    const clearFields = ()=> {
        setMessage('')
        setTech('')
        setAttention(false)
    }
    return (
        <div id='edit-log-modal' className='modal ' style={modalStyle}>
            <div className="modal-content">
                <h4 className="teal-text text-darken-3 ">Edit System Logs</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select 
                            name="texh" 
                            value={tech} 
                            className="browser-default" 
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox"     
                                    className="filled-in" 
                                    checked={attention} 
                                    value={attention}
                                    onChange={ e => setAttention(!attention) }
                                />
                                <span>
                                    Need attention
                                </span>
                            </label>
                        </p>
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
const modalStyle = {
    width: '75%',
    height: '65%'
}
EditLogModal.propTypes = {
    updateLog: PropTypes.func.isRequired,
    current: PropTypes.object,
}
const mapStateToProps = state => ({
    current: state.log.current
})
export default connect( mapStateToProps, { updateLog })(EditLogModal)
