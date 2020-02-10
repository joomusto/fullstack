import React from 'react'


const Formsheet = ({addPerson, newName, newNumber, handleNoteChange, handleNoteChange2}) => {
    return(
    <>
    <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>Name: <input type="text" value={newName} onChange={handleNoteChange}/></div>
        <div>Number: <input type="text" value={newNumber} onChange={handleNoteChange2}/></div>
        <button type="submit">add</button>
      </form>    
    </>
    )

}

export default Formsheet