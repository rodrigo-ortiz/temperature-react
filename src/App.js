import React, {Component}  from 'react';
import { BoilingVerdict } from './components/';

class Calculator extends Component 
{
  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      temperature: '' 
    };
  }

  handleChange(e)
  {
    this.setState({temperature: e.target.value });
  }

  render()
  {
    const { temperature } = this.state;
    return (
      <fieldset>
        <legend> Ingresa la Temperatura en Celsius:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict 
          celsius={parseFloat(temperature)}
        />

      </fieldset>
    )
  }
}

export default Calculator;