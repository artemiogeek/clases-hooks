import React, { useState } from 'react';
import MiHook from '../UseEffect/MiHook';
import Api from './Api'
import MouseHover from './MouseHover';

const UseEffect = () => {

    const [estadoHook, setEstadoHook] = useState(true);

    return (
        <div className='container text-center'>
            <h4>Hook UseEffect</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <MiHook/>
                </div>
            </div>

            <h4>Hook UseEffect como ComponentWillUnMount</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    {estadoHook && <MouseHover/>}
                    <button className='btn btn-warning' onClick={()=> setEstadoHook(false)}>ocultar componente MouseHover</button>
                </div>
            </div>

            <h4>Hook UseEffect consumiento Api</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <Api/>
                </div>
            </div>
        </div>
    );
};

export default UseEffect;