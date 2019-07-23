import React, { Component } from 'react'

export class AuthentificatedComponent extends Component {
    constructor(props){
        super();

        this.state = {
            user: undefined
        }
    }

    
    render() {
        return (
            <div>
                Hello world_
            </div>
        )
    }
}

export default AuthentificatedComponent;
