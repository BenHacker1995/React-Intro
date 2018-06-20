import React, { Component } from 'react';

class Star extends Component {

    render() {
        return (

            <li key={ this.props.star.starName }>
            { this.props.star.starName } has brightness { this.props.star.brightness }</li> 
        )
    }
}

    

export default Star;