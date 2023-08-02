import React, {Component} from 'react';

class MessageClass extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome darling'
        }

    }

    changeMessage() {
        this.setState({
            message: 'Thank you darling'
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                </div>
            </div>
        );
    }
}

export default MessageClass;