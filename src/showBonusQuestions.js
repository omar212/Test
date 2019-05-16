import React, { Component } from 'react';
import Data from './data.json';
import { Form, Button, Input, Dropdown, Card } from 'semantic-ui-react';
import { API_URL, API_KEY, CV } from './api';

class ShowBQ extends Component {
    constructor(props){
      super(props);
      this.state = {
        result: [],
        bonusFood1: '',
        bonusFood2: '',
        bonusMusic1: '',
        bonusMusic2: '',
        bonusGame1: '',
        bonusGame2: '',
        thankyou: false,
        endpoint: ''
      }
    }

    onChange(e){
      console.log(e.target.id);
      const name = e.target.name;
      const val = e.target.value;
      const temp_state = "this.state."
      const combine = temp_state + name;
      const result_id = "result" + e.target.id


      console.log("result_id: ", result_id);
      console.log("name form bonus: ", name);
      console.log("value form bonus: ", val);
      console.log("combine from bonus: ", combine);
      this.setState({
        [e.target.name]: e.target.value,
        result: e.target.value
      })

    }

    getLink = () => {
      const url = `${API_URL}${API_KEY}${CV}&q=${this.props.option}`;
      const random = Math.floor(Math.random()*10)
      console.log("url: ", url);
      console.log("random number: ", random);
      fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          endpoint: result.items[random].link
        })

        console.log("result: ", result);
        console.log("result link: ", result.items[random].link);
      })

      console.log("this.state.endpoint: ", this.state.endpoint);
      return <div>
              <a style={{color: "white"}} href={this.state.endpoint} target = "_blank">Here's a link</a>
              </div>
    }

    onSubmit(e){
      e.preventDefault();
      this.setState({thankyou: true})
      this.getLink();
    }

    render(){
      const temp_state = "this.state";
      console.log("temp state: ", temp_state);

      return(
        <Form className = "questions" onSubmit={this.onSubmit.bind(this)}>
              {Data.map((res, i) =>
               {
                    if(res.Category === this.props.option)
                    {
                        return res.bonus.map(bo => {
                                return  <div>
                                            <label>{bo.bonusQuestion}</label>
                                              <Form.Field>
                                              <Input name={bo.name}
                                                     id = {i}
                                                     value = {this.state.result[{i}]}
                                                     onChange={this.onChange.bind(this)} />
                                              </Form.Field>
                                        </div>
                              })
                    }
                }
              )}
           <Button type="submit">Submit</Button>
           {this.state.thankyou ?
                  <div>
                     <a target="_blank" href={this.state.endpoint}>Click Me</a>
                     <h1>Thank you very much {this.props.name} </h1>
                     <h1>Enjoy your {this.props.option}!</h1>
                  </div> : ""
          }
        </Form>
      )
    }
};

export default ShowBQ;

//Form Try
// return <a
//             href={this.state.endpoint}
//             target="_blank">
//             click me
//         </a>

                     // <button
                     //   onClick={this.state.getLink}>
                     //   click me
                     // </button>

/*<Form onSubmit={this.onSubmit.bind(this)}>
          <header>Bonus Questions</header>
          <Form.Feild>
            <label>{bo.bonusQuestion}</label>
            <Input name={bo.name}
                   value={this.state.bonusFood1}
                   onChange={this.onChange.bind(this)} />
          </Form.Feild>
        </Form>*/

//JUst questions
/* <div style={{fontSize: "20px"}}>
//   {Data.map((res, i) =>
//    {
//         if(res.Category === props.option)
//         {
//             return res.bonus.map(bo => {
//                     return <div>
//                             <h1>{bo.bonusQuestion}</h1>
//                             </div>
//                   })
//         }
//     }
//   )}
// </div> */
