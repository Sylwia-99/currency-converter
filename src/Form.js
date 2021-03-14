import React from 'react';
import './Form.css';

const Form = (props) =>{
  return (
    <form onSubmit={props.submit}>
      <label>
          <input
          type="number"
          amount={props.amount}
          onChange={props.change}
          placeholder="Kwota"
          />
      </label>
      <label>
        <select 
        code={props.code} 
        onChange={props.select}
        >
          <option key="EUR">EUR</option>
          <option key="USD">USD</option>
          <option key="GBP">GBP</option>
          <option key="CHF">CHF</option>
          <option key="AED">AED</option>
          <option key="AUD">AUD</option>
          <option key="BGN">BGN</option>
          <option key="CAD">CAD</option>
          <option key="CNY">CNY</option>
          <option key="CZK">CZK</option>
          <option key="DKK">DKK</option>
          <option key="HDK">HDK</option>
          <option key="HRK">HRK</option>
          <option key="HUF">HUF</option>
          <option key="ILS">ILS</option>
          <option key="AUD">AUD</option>
          <option key="JPY">JPY</option>
          <option key="MXN">MXN</option>
          <option key="NOK">NOK</option>
          <option key="NZD">NZD</option>
          <option key="RON">RON</option>
          <option key="RSD">RSD</option>
          <option key="RUB">RUB</option>
          <option key="SEK">SEK</option>
          <option key="SGD">SGD</option>
          <option key="THB">THB</option>
          <option key="TRY">TRY</option>
          <option key="ZAR">ZAR</option>
        </select>
      </label>
      <button>Przelicz</button>
    </form>
  )
};

export default Form;