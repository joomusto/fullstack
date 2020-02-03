import React from 'react'

const Header = (props) => {
    return(
        <>
        <h1>{props.course.name}</h1>
 
        </>
 
    )
}
const Content = (props) => {
 
    let pieces=props.course.parts
    
    return(
        <div>
        <ul>
        {pieces.map(piece => 

         <p key={piece.id}>
           {piece.name} {piece.exercises}
         </p>)}
      </ul>

      
      </div>
        
    )
}
const Total = (props) => {
    let exerciseArray=props.course.parts.map(part=>part.exercises)
    let exerciseSum=exerciseArray.reduce((a,b)=>a+b,0)
    //console.log("Why is this happening to me?")
    //console.log({exerciseSum})
         
    return(
        <p>
        <strong>Number of exercises {exerciseSum}</strong>
            
        </p>
        
    )
 
}    

const Course = (props)=> {
    return(
      <div>
        <Header course={props.course}/>
        <Content course={props.course}/>
        <Total course={props.course}/>
      </div>
    )
}
export default Course