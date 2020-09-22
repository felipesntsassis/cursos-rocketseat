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
var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma());
