//https://github.com/transferwise/currency-flags

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import SelectCurrency from 'react-select-currency'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      greeting: 'hello',
      currency: '',
      amount: 0,
      date: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.currency}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log(this.state.data)
    console.log(this.state.currency, this.state.amount, this.state.date)
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.greeting}</h1>
        <p>How much would you recieve for CURRENCY AMOUNT in DATE</p>
        <div>
          <SelectCurrency
            type='currency'
            name='currency'
            onChange={this.handleChange}
            value={this.state.currency}
          />
        </div>
        <input
          type='date'
          name='date'
          onChange={this.handleChange}
          value={this.state.date}
        />
        <input
          type='amount'
          name='amount'
          onChange={this.handleChange}
          value={this.state.amount}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)