import React, {useEffect, useState} from 'react'
import TechItem from './TechItem'


const TechListModal = () => {
    const [ techs, setTech ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        getTechs()
        //eslint-disable-next-line
    },[])
    const getTechs = async () => {
        setLoading(true)
        if (!loading) {
            const res = await fetch('/techs')
            const data = await res.json()
            setTech(data)
        }
        setLoading(false)
    }
    
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4 className="teal-text text-darken-2">Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => <TechItem key={tech.id} tech={tech}/>)}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
