import React, { Component } from 'react';
import './App.css';
import charles from './images/Charles.jpg';
import movie from './images/Movie.mp4';
import Data from './data.json';
import SignUpForm from './SignUpForm.js';
import Bar from './NavBar';


class App extends Component {

  state={
    questions: []
  }

  componentDidMount(){
    console.log("i did load");
    console.log(Data);
    Data.map((result,i) => {
      return this.setState({questions: [...this.state.questions,result.Question]})
    })
    console.log("questions: ", this.state.questions);
  }

  render(){
    return(
      <div className="App">
          <header>Welcome to Charles's Website</header>
          <Bar />
          <img alt="" src={charles} />
          <br />
          <video src={movie} controls />
          <SignUpForm />

      </div>
    );
  }
}

export default App;
