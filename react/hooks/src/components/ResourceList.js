import React, { useState, useEffect } from 'react';
import jsonPlaceHolder from '../api/jsonPlaceholder';

const FetchResources = (input) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (res) => {
        const response = await jsonPlaceHolder.get(`/${res}`);
        setResources(response.data);
    };

    // will be called on mount and update
    useEffect(() => {
        fetchResource(input);
    }, [input]); // empty array behaves likes componentDidMount, no array means render every time, 
                            // if a new value or object is passed in, it will be called and behaves like componentDidUpdate
     return resources;                       
};

const ResourceList = (props) => {
    console.log(props);
    const resources = FetchResources(props.resource);

    return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );
    
}

export default ResourceList;