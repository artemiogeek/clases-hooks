import React, { useEffect } from 'react';

let renderContador =0;

const ComponenteHijo = () => {
    useEffect(()=>{
        console.log('Se esta ejecutando nuevamente el componente');
        renderContador++;
    })
    return (
    <h1>El contador hijo es: {renderContador}</h1>
    );
};

export default ComponenteHijo;