import React from 'react'
//import axios from 'axios'

/*
const List = (props) => {
let shownNames= props.persons.filter((name,i) => 
name.name.includes(props.newFilter)
)
*/



const List = ({persons, newFilter, hande}) => {

let shownNames= persons.filter((name,i) => 
name.name.toLowerCase().includes(newFilter.toLowerCase()))
/*
const hande = (props) => {  
  axios.delete(`http://localhost:3001/persons/${props.name.id}`)
  axios.get(`http://localhost:3001/persons`)
    .then(res=> {
      shownNames=res.data
      console.log(res.data)
      console.log(shownNames)
                  {name.name} {name.number} <button type="button" onClick={()=>hande({name})}>delete</button>

      })

  }
*/

return(

<div>
        <ul>
            {shownNames.map((name,i) =>
            <p key={i}>
              {name.name} {name.number} <button type="button" onClick={(e) =>hande(name,e)}>delete</button>
            </p>
            )}
        </ul>
</div>    
)

}

export default List

//{name.number}

/*
const List = (props) => {

return(


<div>
        <ul>
            {props.persons.map((name,i) =>
            <p key={i}>
              {name.name} 
            </p>
            )}
        </ul>
</div>    
)

}


*/