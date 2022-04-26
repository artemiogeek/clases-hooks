import React, { useState, useEffect } from 'react';

const MiHook = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('-> Fase de montaje/actualizacion, component didMount');
        document.title = "click " + count + " veces"
    }, [count]);


    return (
        <div>
            <p>el contador es: {count}</p>
            <button onClick={() => setCount(count +1)} className="btn btn-warning">
                Incrementar contador con Hook
            </button>
        </div>
    );
};

export default MiHook;