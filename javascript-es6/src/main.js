// import { soma, sub } from './functions';
// import * as funcoes from './functions';
// import Usuario, { IdadeUsuario } from './usuario';

// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2));

// console.log(Usuario.info());
// console.log(IdadeUsuario);

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK'); }, 2000);
});

// minhaPromise.then(response => {
//     console.log(response);
// });

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();