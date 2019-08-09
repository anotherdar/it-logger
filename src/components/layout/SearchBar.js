import React, {useRef} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logAction'

const SearchBar = ({ searchLogs }) => {
  const text = useRef('')
  const onChange = e => {
    searchLogs(text.current.value)
  }
  return (
    <nav style={{ marginBottom: '30px' }} className="teal">
      <div className="nav-wrapper bg-blue">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search logs..." onChange={onChange} ref={text}/>
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}
SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}
export default connect(null, {searchLogs})(SearchBar)
