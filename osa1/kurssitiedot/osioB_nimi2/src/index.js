import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return(
        <>
        <h1>{props.course.name}</h1>

        </>

    )
}

const Part = (props) => {
    return(
        <>
        <p>
        {props.part1} {props.exercises1}
        </p>
        </>
    )
}

const Content = (props) => {

    let [a,b,c] = props.course.parts
    return(
        
        <div>
            <Part part1={a.name} exercises1={a.exercises}/>
            <Part part1={b.name} exercises1={b.exercises}/>
            <Part part1={c.name} exercises1={c.exercises}/>
        </div>
        
    )
}

const Total = (props) => {
    let [a,b,c]=props.course.parts

    return(
        <>
         <p>Number of exercises {a.exercises + b.exercises + c.exercises}</p>
        </>
        
    )

}    

const App = () => {
    const course = { 
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },{
      name: 'Using props to pass data',
      exercises: 7
    },{
      name: 'State of a component',
      exercises: 14
    }
    ]
    }
  
    return (
      <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));



