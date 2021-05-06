//forma1
// fetch( jokesUrl ).then( resp=> {
//     //se extrae el body(data) de la petición en formato json
//     resp.json().then( ({id, value})=> {
//         console.log( id );
//         console.log( value );
//     });
// })
//forma2
// fetch(jokesUrl)
//     .then( resp => resp.json())
//     .then( ({id,value} )=> {
//         console.log( id,value );
//     })

const jokesUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuario = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPresent= 'gdgomjr2';
const cloudUrl = 'https://api.cloudinary.com/v1_1/axel0819/upload';

const obtenerChiste = async() => {
    try {
        const resp = await fetch( jokesUrl );
        if ( !resp.ok ) throw 'No realizó la petición';
        const { icon_url,id,value } = await resp.json();
        return { icon_url,id,value };
    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async() => {
    const resp = await fetch( urlUsuario );
    //:para renombrar la llave
    const { data:usuarios } = await resp.json();
    return  usuarios ;
}

//archivo a subir de tipo file
const subirImagen= async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPresent);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResponse = await resp.json();
            return cloudResponse.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}