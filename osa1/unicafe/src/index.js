import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title=({titlename})=>{
    return(    
    <h1>{titlename}
    </h1>
    )
}
const Text=({text, value})=>{
    return(    
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>

    )
}
const Button=(props)=>{
    return(
    <button onClick={props.handleClick}>
    {props.text}
    </button>
    )

}
const Statistics=({nofeedback,titlename,textpos,textneu,textneg,valpos,valneu,valneg,allstr,all,average,mean,positivityratio,posratstr2})=>{
    if (all === 0) {
        return (
          <div>
            <Title titlename={titlename}/>
            <br></br>
          <div>{nofeedback}</div>
          </div>
        )
      }
  
    return(
    //    <Title titlename={titlename}/>
        <>
        <Title titlename={titlename}/>
        
        <table>
        <tbody>
    
        <Text text={textpos} value={valpos}/>
        <Text text={textneu} value={valneu}/>
        <Text text={textneg} value={valneg}/>
        <Text text={allstr} value={all}/>
        <Text text={average} value={mean}/>
        <Text text={positivityratio} value={posratstr2}/>
        </tbody>
        </table>
        </>
    )
}


/*const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
*/
const App = (props) => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const titlename="Gimme-gimme some Feedback"
  const nofeedback ="No feedback given"
  const posfeed = () => setGood(good + 1)
  const neufeed = () => setNeutral(neutral + 1)
  const negfeed = () => setBad(bad+1)
  let all = good+neutral+bad
  let mean = (good*1.0+bad*(-1.0))/all
  let posrat = good*100.0 / all
  let posratstr = posrat.toString()
  let posratstr2 = posratstr.concat(" %")
  const positivity = "Good"
  const neutrality = "Neutral"
  const negativity = "Bad"
  const stats="Statistics"
  const allstr = "All"
  const average = "Average"
  const positivityratio = "Positive"
  return (
    <div>
      <Title titlename={titlename}></Title>
      <Button handleClick={posfeed} text={positivity}></Button>
      <Button handleClick={neufeed} text={neutrality}></Button>
      <Button handleClick={negfeed} text={negativity}></Button>
      
      <Statistics nofeedback={nofeedback} titlename={stats} textpos={positivity} textneu={neutrality} textneg={negativity} valpos={good} valneu={neutral} valneg={bad} allstr={allstr} all={all} average={average} mean ={mean} positivityratio={positivityratio} posratstr2={posratstr2}/>
      
      
      

    
    </div>
  )
}
/*<Title titlename={stats}/>
      <Text text={positivity} value={good}/>
      <Text text={neutrality} value={neutral}/>
      <Text text={negativity} value={bad}/>
      <Text text={allstr} value={all}/>
      <Text text={average} value={mean}/>
      <Text text={positivityratio} value={posratstr2} />
      */
      
ReactDOM.render(<App />, 
  document.getElementById('root')
)