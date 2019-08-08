import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

//components
import SearchBar from './components/layout/SearchBar'
import AddBtn from './components/layout/AddBtn'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import Logs from './components/logs/Logs'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'

const App = () => {
  useEffect(()=>{
    //init materialize
    M.AutoInit()
    //eslint-disable-next-line
  },[])
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </>
  )
}

export default App
