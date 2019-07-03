import React,{Component} from 'react';


class Simple extends Component {
  constructor(){
      super();
      this.state = {
        userInput: ''
    }

  }

  handleChange(val) {
    this.setState({ userInput: val });
    }


  render (){
    return (
      <div >
           <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
           <h4>{this.state.userInput}</h4>
      </div>
    );

  }
  
}


export default Simple;