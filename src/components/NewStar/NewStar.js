import React, { Component } from 'react';

class NewStar extends Component {

    render() {
        return (
            <div>
                <h2>Add a Star</h2>
                <form onSubmit={ this.props.submit }>
                <input onChange={ this.props.change( 'starName' ) }
                value={ this.props.newStar.starName } placeholder="Name" />

                <input onChange={ this.props.change( 'brightness' ) }
                value={ this.props.newStar.brightness } placeholder="Brightness" />

                <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}


export default NewStar;