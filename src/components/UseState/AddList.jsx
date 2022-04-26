import React, { useState } from 'react';

const usuarioInicial = {nombre: "", apellido: ""};

const AddList = () => {

    const [usuario, setUsuario] = useState(usuarioInicial);
    const [listaUsuario, setListaUsuario] = useState([]);

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setListaUsuario([...listaUsuario, usuario]);
        setUsuario(usuarioInicial);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <div className='col'>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Ingresar Nombre'
                            name='nombre'
                            onChange={handleChange}
                            value={usuario.nombre}
                        />
                    </div>

                    <div className='col'>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Ingresar Apelido'
                            name='apellido'
                            onChange={handleChange}
                            value={usuario.apellido}
                        />
                    </div>

                    <div className='col'>
                        <button className='btn btn-primary btn-block'>Agregar</button>
                    </div>

                </div>
            </form>

            <section className='mt-5'>
                {listaUsuario.length === 0 ? (
                    <p>Sin Usuarios</p>
                ): 
                (
                    listaUsuario.map((usuario, index)=> (
                        <p key={index}> {usuario.nombre} - {usuario.apellido}</p>
                    ))
                )}
            </section>
        </div>
    );
};

export default AddList;