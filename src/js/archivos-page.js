import { subirImagen } from "./http-provider";

const body= document.body;
let inputFile, imgFoto;

const crearInputFile = () =>{
    const html= `
    <h1 class="mt-5">Subir Archivos</h1>
    <hr>

    <label>Seleccione imagen: </label>
    <input type="file" accept="image/png, image/jpg, image/jpeg"/>
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML= html;
    body.appendChild(div);

    inputFile= document.querySelector('input');
    imgFoto= document.querySelector('#foto');
}

const eventos = () =>{
    inputFile.addEventListener('change', (evento) =>{
        const file = evento.target.files[0];
        subirImagen(file).then(url => imgFoto.src = url);
    });
}

export const init= () =>{
    crearInputFile();
    eventos();
}   