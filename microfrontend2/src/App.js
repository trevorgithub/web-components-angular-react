import React, { Component } from 'react';

export class App extends Component {
    state = {
        hello: 'React v15 Web Component'
    };

    render() {
        return (
            <div>
                <h3>Title: {this.props.title}</h3>
                <p>Greeting: {this.state.hello}</p>
            </div>
        )
    }
}
