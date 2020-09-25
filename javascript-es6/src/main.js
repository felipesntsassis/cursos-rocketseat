// import { soma, sub } from './functions';
// import * as funcoes from './functions';
// import Usuario, { IdadeUsuario } from './usuario';

// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2));

// console.log(Usuario.info());
// console.log(IdadeUsuario);

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK'); }, 2000);
// });

// minhaPromise.then(response => {
//     console.log(response);
// });

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// const executaPromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn(err);
        }
    }
}

Api.getUserInfo('felipesntsassis');
Api.getUserInfo('felipesntsassisteste');


// Exercício Módulo 3
const delay = () => new Promise(resolve => setTimeout(resolve), 1000);

async function umPorSegundo() {
    await delay().then(() => console.log('1s'));
    await delay().then(() => console.log('2s'));
    await delay().then(() => console.log('3s'));   
}

umPorSegundo();

class GitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
            
        } catch (err) {
            console.log('Repositório não encontrado');
        }
    }
}

GitHub.getRepositories('cursos-rocketseat');