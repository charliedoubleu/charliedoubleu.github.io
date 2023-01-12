import { useEffect } from "react";

function Filter({projects, setFiltered, activeTag, setActiveTag}){
    useEffect(() => {
        if(activeTag === 0){
            setFiltered(projects)
            return
        }
        
        const filtered = projects.filter((proj) => proj.tags.includes(activeTag))
        setFiltered(filtered)
    }, [activeTag, projects, setFiltered])

    return(
        <div className="filter-container">
            <button 
            className={activeTag === 0 ? 'active' : ''} 
            onClick={() => setActiveTag(0)}>all</button>
            <button className={activeTag === 1 ? 'active' : ''} 
            onClick={() => setActiveTag(1)}>game dev</button>
            <button className={activeTag === 2 ? 'active' : ''} 
            onClick={() => setActiveTag(2)}>web dev</button>
            <button className={activeTag === 3 ? 'active' : ''} 
            onClick={() => setActiveTag(3)}>animations</button>
        </div>
    )
}

export default Filter;