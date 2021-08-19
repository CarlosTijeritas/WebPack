import '../css/componentes.css';
import webpacklogo from '../src/assets/imgs/webpacklogo.png';
export const saludar=(nombre) =>{

    console.log('Creando etiqueta h1');

    const h1= document.createElement('h1');
    h1.innerHTML=`Hola ${nombre} !!`;
    document.body.append(h1);

    const img1=document.createElement('img');
    img1.src=webpacklogo;
    document.body.append(img1);
}