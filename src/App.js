import React, { Component } from 'react';
import UseEffects from './UseEffects';
import axios from 'axios';
import CardComponent from './CardComponent';

class App extends Component {
    // initialization
    constructor(props) {
        super(props);
        // this is referring to App
        this.state = {
            name: 'alex',
            post: []
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

        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
            console.log(res.data);
            this.setState({
                post: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
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

        const postList = (this.state.post.length) ? (this.state.post.map((info) => {
            return (
                <React.Fragment key={info.id}>
                    {/* inline css */}
                    <p style={{ color: "pink", backgrounColor: "yellow" }}>Title: {info.title}</p>
                    <p style={{ color: "red", fontSize: "20px", fontWeight: "bolder" }}> Body: {info.body}</p>
                </React.Fragment>
            )
        })) : (<p>No post yet!</p>)

        return (
            <React.Fragment>
                {this.state.name}
                <button onClick={this.handleUpdate}>Update</button>
                <UseEffects />

                <h2>Class Based</h2>
                {postList}

                <h2>Bootstrap Styling</h2>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <h2>Materialize css</h2>
                <div className="collection">
                    <a href="#!" className="collection-item">Alvin</a>
                    <a href="#!" className="collection-item active">Alvin</a>
                    <a href="#!" className="collection-item">Alvin</a>
                    <a href="#!" className="collection-item">Alvin</a>
                </div>

                <h2>Material UI</h2>
                <CardComponent />

            </React.Fragment>
        )
    }
}

export default App;


// task
// go through session, practice lifecycle method and useeffect



// in html
// <p style= "color: pink"></p>

// task
// get the 10 record data from API and display data in UI in cards through Material UI