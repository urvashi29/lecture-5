import React, { Component } from 'react';
import UseEffects from './UseEffects';

class App extends Component {
    // initialization
    constructor(props) {
        super(props);
        // this is referring to App
        this.state = {
            name: 'alex'
        }
    }

    // Mouting
    componentWillMount = () => {
        console.log('component Will mount');
        // this.setState({
        //     name: 'alina'
        // });
    }

    componentDidMount = () => {
        //api calls
        console.log('component did mount');
    }

    // Updation
    handleUpdate = () => {
        this.setState({
            name: 'harry'
        });
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        // if (nextState) { }
        // else { }
        console.log('should component update' + nextState.name);
        return true;
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log('component Will update' + nextState.name);
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('component did update' + prevState.name);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.name}
                <button onClick={this.handleUpdate}>Update</button>
                <UseEffects />
            </React.Fragment>
        )
    }
}

export default App;


// task
// go through session, practice lifecycle method and useeffect