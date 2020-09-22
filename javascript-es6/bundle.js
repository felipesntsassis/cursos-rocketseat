"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var usuario = {
  nome: 'Felipe',
  idade: 35,
  empresa: 'Pedido Agora'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a, b, c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: "Felipe",
  idade: 35,
  empresa: "Pedido Agora"
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Fernanda',
  idade: 37
});

console.log(usuario1, usuario2);
