import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// The component the does all the operation
class Shopping extends Component {
  // All the variables needed
  state = {
    number: 0, // registering the number of phones inserted by the input
    bought: 0, // number of bought phones
    price: 0, // registering the price inserted by the input
    totalPhones: 0, // Number of bought phones on the submit
    total: 0, // Total calculated by the bought phones on the submit
    tax: 0, // Tax value resulted from the total above
    totalVat: 0, // Total with the tax included
    fullTotal: 0, // Total of all shops made
    balance: 10000 // Account balance. It starts with this value
  };

  // Constructor
  constructor(props) {
    super(props);

    this.number = React.createRef();
    this.price = React.createRef();
  }

  // This function registers the values inserted by the name identification
  updateInformation = event => {
    event.preventDefault(); // Prevents page from reload

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /* The function makes the calculation each time the submit is pressed. 
      
    The total is calculated just by multiplying the number of bought phones
      for the price (which is the same for all each time is inserted).
      
      The tax is calculated by multiplying the total for 23%.

      The total with taxes is just the sum of the  base total with tax.

      The total of all the shopping is the sum of each calculation to what
      already is stored ont the state.

      The balance is the subtraction of the current balance by the total of
      the bought phones with the tax included.

      All of these calculations (except the number of bought phones) are calculated using the function parseFloat. This forces float values 
      and avoids String stored values.

  */
  makeCalculation = event => {
    event.preventDefault();

    let totalBCalc =
      parseFloat(this.state.number) * parseFloat(this.state.price);
    let total = totalBCalc.toFixed(2);

    let tax = parseFloat(total * 0.23);
    let taxFixed2 = tax.toFixed(2);

    let newBalance = parseFloat(this.state.balance - total + tax).toFixed(2);

    let totalCalc = parseFloat(total) + parseFloat(taxFixed2);
    let totalVat = totalCalc.toFixed(2);

    let fullTotalCalc = parseFloat(this.state.totalVat) + parseFloat(totalVat);
    let fullTotal = fullTotalCalc.toFixed(2);

    if (newBalance < 0) {
      alert('Out of balance! You cannot buy more phones.');
    } else {
      // Here all the elements are updated
      // Also the "totalPhones" represents all the bought phones since the first shop
      this.setState({
        bought: this.state.number,
        totalPhones: this.state.totalPhones + parseInt(this.state.number),
        total: total,
        tax: taxFixed2,
        totalVat: totalVat,
        fullTotal: fullTotal,
        balance: newBalance
      });
    }
  };

  render() {
    return (
      <div className="Shopping">
        <div>
          <Form>
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  Number of Phones
                  <Input
                    type="number"
                    name="number"
                    min="0"
                    placeholder="0"
                    onChange={this.updateInformation}
                  />{' '}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  Price
                  {/* Important that the step option is used to allow decimal insertion. */}
                  <Input
                    type="number"
                    name="price"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    onChange={this.updateInformation}
                  />{' '}
                </Label>
              </FormGroup>{' '}
              <br />
              <FormGroup check>
                <Button
                  onClick={e => this.makeCalculation(e)}
                  title="Buy Phone(s)"
                >
                  Buy Phone(s)
                </Button>
              </FormGroup>
            </FormGroup>
          </Form>
        </div>
        <div className="Status">
          <br />
          <p>Number of bought Phones: {this.state.bought}</p>
          <p>Total Number of bought Phones: {this.state.totalPhones}</p>
          <p>Total Spent: {this.state.total} €</p>

          <p>Tax Rate: 23%</p>

          <p>VAT: {this.state.tax} €</p>

          <p>Total (including taxes): {this.state.totalVat} €</p>

          <p>Full Total (shopping history): {this.state.fullTotal} €</p>

          <p>Account Balance: {this.state.balance} €</p>
        </div>
      </div>
    );
  }
}

export default Shopping;
