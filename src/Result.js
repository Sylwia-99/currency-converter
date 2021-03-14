import React from 'react';
import './Result.css';

const Result = (props) => {
    const {amount, code, mid_course, err} = props.rates;

    let content = null;
    const result = (amount * mid_course).toLocaleString();
    if(!err && amount && code!='undefined'){
        content = (
            <div>
                <h3> {amount} {code} = {result} PLN</h3>
                <strong><h4> 1 {code} = {result} PLN</h4></strong>
            </div>
        )
    }
    return(
        <div className="Result">
            {err ? `Wpisz kwotę oraz wybierz walutę` : content}
        </div>
    );
}

export default Result;