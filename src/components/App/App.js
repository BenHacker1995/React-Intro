import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';

class App extends Component {
  constructor( props ) {

    // React Components have props, pass them to the parent (Component) class
    // If you don't, things won't work right!
    super( props );

    // Setting state with an = is something you only want to do in the constructor.
    // Outside of the constructor always use the setState method
    this.state = { 
        star: { starName: '', brightness: '' },
        starList: []
    }
}

handleChange = ( propertyName ) => ( event ) => {
  console.log( propertyName );
  // Change state using setState not an =
  this.setState( { star: { 
      ...this.state.star,
      [ propertyName ]: event.target.value }});
  }

handleSubmit = ( event ) => {
  event.preventDefault();
  this.setState({ starList: [ ...this.state.starList, this.state.star ]});
  this.setState({ star: { starName: '', brightness: '' }});
  console.log( 'The star is: ', this.state.star );
}
  
  render() {
    return (
      <div className="App">
        <Header />
        <NewStar newStar={ this.state.star } submit={ this.handleSubmit } change={ this.handleChange }/>
        <StarList starList={ this.state.starList } />
      </div>
    );
  }
}

export default App;
