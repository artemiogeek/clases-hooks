import React from 'react';
import { useCounter } from '../hooks/useCounter';


const CustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    return (
        <div className='container text-center'>
            <h1>Custom Hooks</h1>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <h4>El contador es: {counter}</h4>
                </div>
                <div className='col-12 mt-3 d-flex justify-content-center'>
                    <button onClick={()=> increment()} className='btn btn-primary'>Incrementar</button>
                    <button onClick={()=> decrement()} className='btn btn-success mx-2'>Decrementar</button>
                    <button onClick={()=> reset()} className='btn btn-info'>Resetear</button>
                </div>
            </div>
        </div>
    );
};

export default CustomHook;