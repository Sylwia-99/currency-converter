import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import { GiCash } from 'react-icons/gi';

class App extends Component {
  state = {
    amount: '',
    code: '',
    mid_course: '',
    err: false
  }

  handleInputChange = (e) =>{
    this.setState({
      amount: e.target.value
    })
  }

  handleSelectChange = (e) =>{
    this.setState({
      code: e.target.value
    })
  }

  handleAmountSubmit = (e) =>{
    e.preventDefault();
    const API = `http://api.nbp.pl/api/exchangerates/rates/a/${this.state.code}/?format=json`;
    fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          err: false,
          code: data.code,
          mid_course: data.rates[0].mid,
          amount: prevState.amount
        }))
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: true,
        })
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <GiCash className="Icons"/>
          <div className="Description">
            <h1>Przelicznik walut</h1> 
            <p>
            Wpisz kwotę, wybierz walutę i naciśnij przycisk "Przelicz", by przeliczyć daną kwotę na PLN.
            Aktualny kurs waluty pobierany jest z API NBP.
            </p>
          </div>
        </header>
        <div className="App-form">
            <Form
            amount={this.state.amount}
            code={this.state.code} 
            change={this.handleInputChange}
            select={this.handleSelectChange}
            submit={this.handleAmountSubmit}
            />
          </div>
          <Result 
          rates={this.state}
          />
      </div>
    );
  }
}

export default App;


