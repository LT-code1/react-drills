import React,{Component} from 'react';


class Simple extends Component {
  constructor(){
    super();     
    this.state = {
        userInput1: '',
        userInput2: '',
    }

  }

handleChange1(val) {
    this.setState({ userInput1: val });
}
handleChange2(val) {
    this.setState({ userInput2: val });
}
alert1(str1,str2) {
    alert("Username: "+str1+" Password: "+str2);

}


  render (){
    return (
        <span>
           <input onChange={ (e) => this.handleChange1(e.target.value) }></input> 
           <input onChange={ (e) => this.handleChange2(e.target.value) }></input> 
           <button onClick={ (e) => { this.alert1(this.state.userInput1,this.state.userInput2) }}> Login </button>
         </span>
    );

  }
  
}
export default Simple;





  