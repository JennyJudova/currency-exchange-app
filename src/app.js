//https://github.com/transferwise/currency-flags
console.log('hello there')

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      greeting: 'hello', 
      currency: null, 
      ammount: null,
      date: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://api.exchangeratesapi.io/2000-01-01?base=USD') //`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.currency}`
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  
  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    console.log(this.state.currency, this.state.ammount, this.state.date)
    return (
      <>
      <h1>{this.state.greeting}</h1>
      <p>How much would you recieve for CURRENCY AMMOUNT in DATE</p>
      <form>
        <div className='date'>
          <input
            type='date'
            name='date'
            onChange={this.handleChange}
            value={this.state.date}
          />
        </div>

      </form>
      </>
    )
  }
}
  
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)