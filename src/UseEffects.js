import React, { useEffect, useState } from "react";
import axios from 'axios';
import './UseEffects.css';

const UseEffects = () => {
    const [name, setName] = useState('alina');
    const [age, setAge] = useState(20);
    const [post, setPost] = useState([]);

    // callback, empty array
    // componentDidMount using useeffect
    useEffect(() => {
        // axios.get(api).then(response).catch(error);

        //api calls
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
            console.log(res.data);
            setPost(res.data);//setting data in post
        }).catch((err) => {
            console.log(err);
        });
    });

    // componentDidUpdate using useeffect
    useEffect(() => {
        document.title = name;
    }, [name]);

    // ComponentWillUnmount using useeffect
    // useEffect(() => {
    //     document.title = name;
    // }, []);

    // condional rendering (condition) ? (true) : (false)
    const postList = (post.length) ? (post.map((info) => {
        return (
            <React.Fragment key={info.id}>
                <p>Title: {info.title}</p>
                <p> Body: {info.body}</p>
            </React.Fragment>
        )
    })) : (<p>No post yet!</p>)

    // react-loader-spinner

    return (
        <React.Fragment>
            <p className="style-content">{name}</p>
            <p id="style-id">{age}</p>
            {postList}
        </React.Fragment>
    )
}

export default UseEffects;

// HTTP methods: get post update delete

// API : Application Programe interface

// exploring api
// rapid api
// https://jsonplaceholder.typicode.com/posts/


// http status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status