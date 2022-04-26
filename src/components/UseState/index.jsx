import React from 'react';
import MiHook from './MiHook';
import PreviousState from './PreviousState';
import AddList from './AddList';

const UseState = () => {
    return (
        <div className='container text-center'>
            <h4>Hook UseState</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <MiHook/>
                </div>
            </div>

            <h4>UseState con previousState</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <PreviousState/>
                </div>
            </div>

            <h4>Add list con Hooks</h4>
            <div className='row'>
                <div className='col-12 alert alert-primary'>
                    <AddList/>
                </div>
            </div>
        </div>
    );
};

export default UseState;