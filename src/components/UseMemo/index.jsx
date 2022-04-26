import React, { useMemo, useState } from 'react';
import ComponenteHijo from './ComponenteHijo'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [estado, setEstado] = useState(true);

    const componenteMemorizado = useMemo(()=>{
        return <ComponenteHijo/>;
    }, [estado]);

    return (
        <div className='container text-center'>
            <h4>Hook UseMemo</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    {componenteMemorizado}
                </div>
            </div>

            <div className='row'>
                <div className='col-6 alert alert-primary'>
                    <h4>el contador es: {count}</h4>
                    <button 
                        onClick={()=> setCount(count + 1)} 
                        className='btn btn-success'
                    >
                        aumenta en 1
                    </button>
                </div>
                <div className='col-6 alert alert-primary'>
                    <h4>el estado es: {JSON.stringify(estado)}</h4>
                    <button onClick={()=>setEstado(!estado)} className='btn btn-success'>actualizar el estado</button>
                </div>
            </div>

        </div>
    );
};

export default UseMemo;