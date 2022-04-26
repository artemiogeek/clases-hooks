import React,  { useState } from "react";

const initialCount = 0;

const PreviousState = () => {

    const [count, setCount] = useState(initialCount);

    const handleClick = () => {
        for(let i = 0; i<5; i++) {
            setCount((prev) => prev +1);
        }
    }

    return (
        <div>
            <p>Contador = {count}</p>
            <button onClick={()=> setCount(initialCount)} className='btn btn-primary'>Resetar contador</button>
            <button onClick={()=> setCount(count + 1)} className='btn mx-2 btn-success'>Incrementar en 1</button>
            <button onClick={()=> setCount(count -1)} className='btn mx-2 btn-danger'>Decrementar en 1</button>
            <button onClick={handleClick} className='btn btn-info'>Incrementar en 5</button>
        </div>
    );
};

export default PreviousState;