import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '+358-1112223' }
  ]) 
   

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    console.log(nameObject)
    let nameList=persons.map(name=>name.name)
    //console.log(nameList)
    
    if(nameList.includes(nameObject.name)){
      window.alert(`${newName} is already added to phonebook`)

    }else{

      setPersons(persons.concat(nameObject))
    }
    console.log(persons)
    console.log(nameObject.number)


    //setPersons(persons.concat(nameObject))

    setNewName('')
    setNewNumber('')
  }
  const handleNoteChange = (event) => {
    setNewName(event.target.value)
    
    }

    const handleNoteChangeNumber = (event) => {
      setNewNumber(event.target.value2)

  
      }
 // console.log(persons)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>Name: <input value={newName} onChange={handleNoteChange}/></div>
        <div>Number: <input value2={newNumber} onChange={handleNoteChangeNumber}/></div>
        <button type="submit">add</button>
      </form>     
    
      <h2>Numbers</h2>
      <div>
      <ul>
      {persons.map((name,i) => 
      <p key={i}>
      {name.name} {name.number}
      </p>
      )}
      </ul>
      </div>
  
    </div>
  )
  

}
/*
      <div>
      {persons.map((name, i) =>
          <Note key={i} note={name} />)}
      
      </div>

*/

//      <div>{people}</div>

//{notesToShow.map((note, i) =>
//<Note key={i} note={note} />
//)}
/* import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      //date: new Date().toISOString(),
      //important: Math.random() > 0.5,
      //id: notes.length + 1,
    }
    setPersons(persons.concat(nameObject))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )

}
} */
export default App

