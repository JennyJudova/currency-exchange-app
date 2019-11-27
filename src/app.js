console.log('hello there')

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      greeting: 'hello', 
      currency: null, 
      ammount: null,
      date: null
    }
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/2000-01-01?base=USD') //`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.currency}`
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      <h1>{this.state.greeting}</h1>
      <p>How much would you recieve for CURRENCY AMMOUNT in DATE</p>
      </>
    )
  }
}
  
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)