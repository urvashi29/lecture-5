import React, { useEffect, useState } from "react";

const UseEffects = () => {
    const [name, setName] = useState('alina');
    const [age, setAge] = useState(20);

    // callback, empty array
    // componentDidMount using useeffect
    useEffect(() => {
        //api calls
        document.title = name;
    });

    // componentDidUpdate using useeffect
    useEffect(() => {
        document.title = name;
    }, [name]);

    // ComponentWillUnmount using useeffect
    // useEffect(() => {
    //     document.title = name;
    // }, []);

    return (
        <React.Fragment>
            <p>{name}</p>
            <p>{age}</p>
        </React.Fragment>
    )
}

export default UseEffects;

// HTTP methods: get post update delete

// API : Application Programe interface

// exploring api
// rapid api
// https://jsonplaceholder.typicode.com/posts/

