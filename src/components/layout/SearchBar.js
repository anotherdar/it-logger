import React from 'react'

const SearchBar = () => {
    return (
        <nav style={{ marginBottom: '30px' }} className="teal">
          <div className="nav-wrapper bg-blue">
            <form>
              <div className="input-field">
                <input id="search" type="search" placeholder="Search logs..." />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    )
}

export default SearchBar
