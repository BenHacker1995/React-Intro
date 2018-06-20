import React, { Component } from 'react';

class Star extends Component {
    constructor( props ) {

        // React Components have props, pass them to the parent (Component) class
        // If you don't, things won't work right!
        super( props );

        // Setting state with an = is something you only want to do in the constructor.
        // Outside of the constructor always use the setState method
        this.state = { star: { starName: 'Menkar', brightness: 5 } }


        // Make sure that the handleChange knows about 'this'
        // this.handleChangeForName = this.handleChange.bind( this.starName );
        // this.handleChange.brightness = this.handleChange.bind( this.brightness );
    }

    handleChange = ( propertyName ) => ( event ) => {
        console.log( propertyName );
        // Change state using setState not an =
        this.setState( { star: { 
            ...this.state.star,
            [ propertyName ]: event.target.value }});
        }

    render() {
        return (
            <div>
                <h2>The Best Star Ever</h2>
                <input onChange={ this.handleChange( 'starName' ) } />
                <input onChange={ this.handleChange( 'brightness' ) } />
                <p>A star named { this.state.star.starName } with Brightness of { this.state.star.brightness }</p>
            </div>
        );
    }
}


export default Star;