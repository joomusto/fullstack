import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'
import Formsheet from './components/Formsheet'
import Filtering from './components/Filtering'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons] = useState([
    { name: '',
    number: '' }
  ]) 
   

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] =useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [toggle, setToggle]=useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //const addName = (event) => {
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
//   console.log(nameObject)
    let nameList=persons.map(name=>name.name)
    //console.log(nameList)
    
    if(nameList.includes(nameObject.name)){
      window.alert(`${newName} is already added to phonebook`)
      setToggle('error')
      setErrorMessage(
        `The new name '${newName}' was already in the list! Vad tråkigt! :c`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)


    }else{

      //setPersons(persons.concat(nameObject))
      
      personService
      .create(nameObject)
      .then(response=> {
        setPersons(persons.concat(response.data))
      })
      setToggle('addition')
      setErrorMessage(
        `A new name '${newName}' was added! Vad fint! :3`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
  //    console.log(persons)
    }
    //console.log(persons)
    //console.log(nameObject.number)


    //setPersons(persons.concat(nameObject))

    setNewName('')
    setNewNumber('')
    setNewFilter('')
  }
  const handleNoteChange = (event) => {
    setNewName(event.target.value)
    }

  const handleNoteChange2 = (event) => {
    setNewNumber(event.target.value)
    }
  
  const handleNoteChange3 = (event) => {
    setNewFilter(event.target.value)
    }

  const hande = (props) => {  
    if(window.confirm('Are you sure, you want to delete '+props.name))
    axios.delete(`http://localhost:3001/persons/${props.id}`)
//    axios.delete(`http://localhost:3001/persons/8`)
    .then(res=> {
      console.log(res.data)
      axios.get(`http://localhost:3001/persons`)
    .then(res=> {
      setPersons(res.data)
      console.log(persons)

      })
    })
    
        
  
    
  }
    

//
//    const handleNoteChangeNumber = (event) => {
//      setNewNumber(event.target.value2)

  
  //    }
 // console.log(persons)
  //// onChange={handleNoteChangeNumber}

  return (
    <div>
      <Filtering newFilter={newFilter} handleNoteChange3={handleNoteChange3}/>      
      <Formsheet addPerson={addPerson} newName={newName} newNumber={newNumber} handleNoteChange={handleNoteChange} handleNoteChange2={handleNoteChange2}/>
      <h2>Numbers</h2>
      <Notification message={errorMessage} toggle={toggle}/>
      <div>
      <List persons={persons} newFilter={newFilter} hande={hande}/></div>
  
    </div>
  )
  

}

export default App

/*
<Notification message={errorMessage} />
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>Name: <input type="text" value={newName} onChange={handleNoteChange}/></div>
        <div>Number: <input type="text" value={newNumber} onChange={handleNoteChange2}/></div>
        <button type="submit">add</button>
      </form>
*/