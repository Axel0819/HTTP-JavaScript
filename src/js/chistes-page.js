import { obtenerChiste } from "./http-provider";

const body = document.body;
let lChistes, btnChiste;

const crearChistesHTML= () =>{
    const html = `
    <h1 class="mt-5">Chistes 😂</h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group"></ol>`;

    const   divChistes = document.createElement('div');
            divChistes.innerHTML= html;
    body.append(divChistes);
}

const eventos= ()=>{
    lChistes= document.querySelector('ol');
    btnChiste= document.querySelector('button');
    let cant= 0;
    btnChiste.addEventListener('click',async()=>{
        cant++;
        btnChiste.disabled= true;
        dibujarChiste( cant, await obtenerChiste() );
        btnChiste.disabled= false;
    });
}

//chiste destruc{id,value}
const dibujarChiste = ( cant,{id,value} ) =>{
    const li= document.createElement('li');
    li.innerHTML= `<b>${cant}) ${id}</b>: ${value}`;
    li.classList.add('list-group-item');
    lChistes.append(li);
}
export const init= () => {
    crearChistesHTML();
    eventos();
}