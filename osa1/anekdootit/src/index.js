import React, { useState } from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes]=useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
//  const [value,setValue]=useState(0)
//  const copy = [...votes]
  const Addvalue=()=>{
      votes[selected]+=1
      ReactDOM.render(
        <App anecdotes={anecdotes} />,
        document.getElementById('root')
      )
    }  
  const RandomAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length)) 
  const text = "Arvo uusi anekdootti"
  const textVoting = "Äänestä"
  const textVoted = "Tätä anekdoottia on äänestetty: "
  return (
    <div>
      <h2>{props.anecdotes[selected]}</h2>
      <Button handleClick={RandomAnecdote} text={text}></Button>
      <Button handleClick={Addvalue} text={textVoting}/>
      <Aania text={textVoted} votes={votes} selected={selected}></Aania>
      <h1>Eniten ääniä saanut anekdootti</h1>
      <Suurin votes={votes} anecdotes={anecdotes}/>
 
 
    </div>
  )
}

const Suurin =(props)=>{
    let n=Math.max(...props.votes)
    let m=props.votes.indexOf(n)
    let a =props.anecdotes[m]
    return(
        <div>
        {a}

        </div>
        
    )
}
const Aania=(props)=>{
    return(    
    <div>
    {props.text}{props.votes[props.selected]}
    </div>
    )  

}
// <Button> handleClick={Copy} text={textVoting}></Button>
// <div>{textVoted} {votes}</div>
const Button=(props)=>{
    return(
    <button onClick={props.handleClick}>
    {props.text}
    </button>
    )

}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
//console.log(Math.floor(Math.random()*11))
//console.log(anecdotes[1])
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
