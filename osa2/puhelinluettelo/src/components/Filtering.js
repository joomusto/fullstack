import React from 'react'


const Filtering = ({newFilter,handleNoteChange3}) => {
    return(
    <>
    <div>Filter shown with: <input type="text" value={newFilter} onChange={handleNoteChange3}/></div>
 
    </>
    )

}

export default Filtering