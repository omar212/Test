import React, { Component } from 'react';
import Data from './data.json';
import { Form, Button, Input, Dropdown, Card } from 'semantic-ui-react';
import ShowBQ from './showBonusQuestions.js';


class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      food: '',
      option: '',
      id: 0,
      clicked: true

    }
  }

  onChange(e){
    console.log(e.target.id);
    this.setState({
      [e.target.name]: e.target.value,
      id: e.target.id
    })

  }

  onSelectOption(e){
    this.setState({option: e.target.value})
    console.log(e.target.value);
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({clicked: false})
    console.log(this.state);
  }
  render(){
    return(
      <Card style={{backgroundColor: "black",color:"white", margin: "auto", width:"50%", height:"1000px"}}>
      <Form className = "questions" onSubmit={this.onSubmit.bind(this)}>
            <header>Answer this form</header>
            <Form.Field>
              <label>What is your Name?</label>
              <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange.bind(this)} />
            </Form.Field>
            <br />
            <Form.Field>
            <label className="control-label">{Data[1].Question}</label>
            <Input
                type="text"
                name="food"
                value={this.state.food}
                onChange={this.onChange.bind(this)}
                 />
            <br />
            </Form.Field>
            <Form.Field>
              <label>Choose your hobby: </label>
              <select id={this.state.id} value={this.state.option} name="option" onChange={this.onChange.bind(this)}>
                <option id = {Data[0].id} value={Data[0].Category}>{Data[0].Category}</option>
                <option id = {Data[1].id} value={Data[1].Category}>{Data[1].Category}</option>
                <option id = {Data[2].id} value={Data[2].Category}>{Data[2].Category}</option>
              </select>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>

          {this.state.clicked ? "" :
                <div>
                  <header>Part 2</header>
                  <ShowBQ
                    name={this.state.name}
                    option={this.state.option}/>
                </div>
          }
      </Card>

    );
  }
}

export default SignUpForm;

// Shows Results
/* <p>Answers:</p> { (this.state.name || this.state.food || this.state.option)  === "" || this.state.id == 0
//                 ?   (
//                         <div>
//                             <h1>Name:</h1> {this.state.name}
//                             <h1>food:</h1> {this.state.food}
//                             <h1>option:</h1> {this.state.option}
//                             <h1>id:</h1> {this.state.id}
//                         </div>
                       )  : ""} */
