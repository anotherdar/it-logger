import React, {useEffect, useState} from 'react'
import LogItem from './LogItem'
import PreLoader from '../layout/PreLoader'

const Logs = () => {
    const [ logs, setLogs ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        getLogs()
        //eslint-disable-next-line
    },[])
    const getLogs = async () => {
        setLoading(true)
        if (!loading) {
            const res = await fetch('/logs')
            const data = await res.json()
            setLogs(data)
        }
        setLoading(false)
    }
    if(loading) return <PreLoader />
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h3 className="center teal-text text-darken-1">System Logs</h3>
            </li>

            { !loading && logs.length === 0 ? (
                <p className="center teal-text">No logs to show...</p>
            ) : (
                logs.map(log=> <LogItem key={log.id} log={log} />)
            )}
        </ul>
    )
}

export default Logs
