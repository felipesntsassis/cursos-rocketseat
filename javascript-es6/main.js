// class List {
    
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }

// }

// class TodoList extends List {
    
//     constructor() {
//         super();
        
//         this.user = 'Felipe';
//     }

//     mostraUsuario() {
//         console.log(this.user);
//     }
// }

// class Matematica {
//     static soma (a, b) {
//         return a + b;
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById("add-todo").onclick = function () {
// 	MinhaLista.add('Novo todo');
// };

// MinhaLista.mostraUsuario();
// console.log(Matematica.soma(1, 2));

// const arr = [1, 3, 4, 5, 8, 9];

// const arrMap = arr.map(function (item, index) {
//     return item  + index;
// });
// console.log('Exemplo com map()', arrMap);

// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });
// console.log('Exemplo reduce', sum);

// const filter = arr.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log('Exemplo filter', filter);

// const find = arr.find(function (item) {
//     return item === 4;
// });
// console.log('Exemplo find', find);

// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const teste = () => ({ nome: 'teste' });

// console.log(teste());

// function soma(a = 3 , b = 6) {
//     return a + b;
// }

// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());

// const usuario = {
//     nome: 'Felipe',
//     idade: 35,
//     endereco: {
//         cidade: 'Ourinhos',
//         estado: 'SP'
//     }
// };

// console.log(usuario);
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome, idade, cidade);

// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }

// mostraNome(usuario);

// REST
const usuario = {
    nome: 'Felipe',
    idade: 35,
    empresa: 'Pedido Agora'
};

const { nome, ...resto } = usuario;
console.log(nome, resto);

const arr = [1, 2, 3, 4];
const [ a, b, ... c] = arr;
console.log(a, b, c);

function soma(... params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));


// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [... arr1, ...arr2];
console.log(arr3);

const usuario1 = {
	nome: "Felipe",
	idade: 35,
	empresa: "Pedido Agora",
};

const usuario2 = { ...usuario1, nome: 'Fernanda', idade: 37 };
console.log(usuario1, usuario2);
