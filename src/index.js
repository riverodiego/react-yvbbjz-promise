// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const productos = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripcion 1',
    stock: 5,
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripcion 2',
    stock: 8,
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripcion 3',
    stock: 15,
  },
];

const getProductos = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 3000);
});

getProductos
.then((res) => console.log(res))
.catch(err=>console.log(err))
