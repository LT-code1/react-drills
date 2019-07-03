import React,{Component} from 'react';


class Simple extends Component {
  constructor(props){
    super(props);     //calls Component constructor
    this.state = {
      food: ["pizza","spaghetti","chicken","tacos"]             //students -> food
    }

  }
  render (){
    return (
      <div >
          {this.state.food.map(element => {
              return  <h3>{element}</h3> 
          })}
      </div>
    );
  }
}


export default Simple;


