import React, { Component } from 'react';

class Star extends Component {
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

    handleSubmit = () => {
        this.setState({ starList: [ ...this.state.starList, this.state.star ]});
        this.setState({ star: { starName: '', brightness: '' }});
        console.log( 'The star is: ', this.state.star );
    }

    render() {
        return (
            <div>
                <h2>The Best Star Ever</h2>
                <input onChange={ this.handleChange( 'starName' ) }
                value={ this.state.star.starName } placeholder="Name" />

                <input onChange={ this.handleChange( 'brightness' ) }
                value={ this.state.star.brightness } placeholder="Brightness" />

                <button onClick={ this.handleSubmit }>Add</button>
                <ul>
                { this.state.starList.map( star => 
                    <li>{ star.starName } has brightness { star.brightness }</li>
                    )
                }
                </ul>
            </div>
        );
    }
}


export default Star;