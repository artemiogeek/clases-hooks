import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) =>{
    switch(action){
        case "incrementar":
            return state +1;
        case "decrementar":
            return state -1;
        case "resetear":
            return initialState;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='alert alert-warning text-center'>
            <h4>Hook UseReducer</h4>
            <h1>Contador en {count}</h1>
            <button onClick={()=> dispatch("incrementar")} className='btn btn-primary'>Incrementar</button>
            <button onClick={()=> dispatch("decrementar")} className='btn btn-success mx-2'>Decrementar</button>
            <button onClick={()=> dispatch("resetear")} className='btn btn-info'>Resetear</button>
        </div>
    );
};

export default UseReducer;