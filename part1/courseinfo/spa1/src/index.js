import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <>
    {props.course}
    </>
  )
}

const Content = (props) => {
  return (
    <>
      {props.part1}
      {props.part2}
      {props.part3}
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises </p> {props.exercises1} + {props.exercises2} + {props.exercises3}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))