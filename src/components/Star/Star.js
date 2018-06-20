import React, { Component } from 'react';

class Star extends Component {
    constructor( props ) {

        // React Components have props, pass them to the parent (Component) class
        // If you don't, things won't work right!
        super( props );

        // Setting state with an = is something you only want to do in the constructor.
        // Outside of the constructor always use the setState method
        this.state = { starName: 'Menkar', brightness: 5 }


        // Make sure that the handleChange knows about 'this'
        // this.handleChangeForName = this.handleChange.bind( this.starName );
        // this.handleChange.brightness = this.handleChange.bind( this.brightness );
    }

    handleChangeForName = ( event ) => {
        console.log( event.target );
        // Change state using setState not an =
        this.setState( { ...this.state, starName: event.target.value } );
    }

    handleChangeForBrightness = ( event ) => {
        console.log( event.target );
        // Change state using setState not an =
        this.setState( { ...this.state, brightness: event.target.value } );    
    }
        // either this or do handleChange( event ) => {
        // don't need this.handleChange above if you do this

    render() {
        return (
            <div>
                <h2>The Best Star Ever</h2>
                <input onChange={ this.handleChangeForName } />
                <input onChange={ this.handleChangeForBrightness } />
                <p>A star named { this.state.starName } with Brightness of { this.state.brightness }</p>
            </div>
        );
    }
}


export default Star;