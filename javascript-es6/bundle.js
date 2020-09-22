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
var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'teste'
  };
};

console.log(teste());
