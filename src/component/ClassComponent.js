import React, {Component} from 'react';


class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'test',
            message: 'test message'
        }
    }

    handleClick() {
        this.setState({
            name: 'new name',
            message: 'new message'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleClick()} >Change</button>
            </div>
        )
    }
}

export default ClassComponent;