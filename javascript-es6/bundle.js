"use strict";

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
var usuario = {
  nome: 'Felipe',
  idade: 35,
  endereco: {
    cidade: 'Ourinhos',
    estado: 'SP'
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
