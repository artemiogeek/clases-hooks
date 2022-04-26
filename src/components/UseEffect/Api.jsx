import React, {useState, useEffect } from 'react';

const FetchList = () => {

    const [list, setList] = useState([]);

    useEffect(()=> {
        consultarApi();
    }, []);   // componentDidMount

    const consultarApi = async () => {
        const urlApi = 'https://jsonplaceholder.typicode.com/posts'
        const respuesta = await fetch(urlApi);
        const info = await respuesta.json();
        console.log(info);
        setList(info)
    }

    return (
        <div>
            <h1>Llamamos a una API gratuita</h1>
            <ul>
            {list.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
                
            </ul>
            
        </div>
    );
};

export default FetchList;