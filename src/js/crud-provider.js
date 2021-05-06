
const urlAPI= 'https://reqres.in/api/users';

const getUsuario = async(id)=>{
    const resp= await fetch(`${urlAPI}/${id}`);
    const { data }= await resp.json();
    return data;
}

const crearUsuario= async(usuario)=>{
    const resp= await fetch(urlAPI, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario= async(id,usuario)=>{
    const resp= await fetch(`${urlAPI}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const borrarUsuario= async(id)=>{
    const resp= await fetch(`${urlAPI}/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok) ? 'Borrado': 'NO se pudo eliminar';
}

export{
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}