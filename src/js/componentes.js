import '../css/componentes.css';


export const miString = (palabra) => {
    console.log('Creando etiqueta h1, en el HTML');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Probando ${palabra}`;

    document.body.append(h1);
}