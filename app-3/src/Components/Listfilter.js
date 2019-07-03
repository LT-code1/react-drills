import React,{Component} from 'react';


class Listfilter extends Component {
  constructor(){
    super();     //calls Component constructor
    this.state = {
        food: ['pizza', 'spaghetti', 'tacos', 'chicken', 'rice', 'milk', 'beer', 'gatorade'],
        userInput: '',
        filteredFood: []
    };

  }

    handleChange(val) {
        this.setState({ userInput: val });
        this.filterFood(val);
    }

    filterFood(userInput) {
        let food = this.state.food;
        let filtered = [];
    
        for ( let i = 0; i < food.length; i++ ) {
          if ( food[i].startsWith(userInput) ) {
            filtered.push(food[i]);
          }
        }
    
        this.setState({ filteredFood: filtered });
    }

   


  render (){
    return (
      <div >
           <input onChange={ (e) => this.handleChange(e.target.value) }></input>  
           <h4> { JSON.stringify(this.state.food, null, 10) } </h4> 
           <br></br>
           <h4> { JSON.stringify(this.state.filteredFood, null, 10) } </h4>
      </div>
    );

  }
  
}


export default Listfilter;



