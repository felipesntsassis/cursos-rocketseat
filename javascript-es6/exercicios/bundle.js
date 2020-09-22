"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercício 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, password) {
    _classCallCheck(this, Usuario);

    this.admin = false;
    this.email = email;
    this.password = password;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, password);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email1@teste.com', 'senha123');
var User2 = new Admin('email1@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(User2.isAdmin()); // Exercício 2

var usuarios = [{
  nome: 'Felipe',
  idade: 35,
  empresa: 'Pedido Agora'
}, {
  nome: 'Fernanda',
  idade: 37,
  empresa: 'Pedido Agora'
}, {
  nome: 'Camila',
  idade: 22,
  empresa: 'Escolpi Informática'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log('Map: ', idades);
var filter = usuarios.filter(function (usuario) {
  return usuario.idade > 35 && usuario.empresa === 'Pedido Agora';
});
console.log('Filter:', filter);
var find = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log('Find:', find);
var arrUniao = usuarios.map(function (usuario) {
  usuario.idade = usuario.idade * 2;
  return usuario;
}).find(function (usuario) {
  return usuario.idade <= 50;
});
console.log('União de operações', arrUniao); // Exercício 3

var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (item) {
  return item + 10;
});
console.log('Map', map);
var usuario = {
  nome: 'Felipe',
  idade: 35
};

var mostrarIdade = function mostrarIdade(usuario) {
  return usuario.idade;
};

console.log('Mostrar Idade: ', mostrarIdade(usuario));
var nome = 'Felipe';
var idade = 35;

var mostrarUsuario = function mostrarUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Felipe';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log('Mostrar usuário:', mostrarUsuario(nome, idade));
console.log('Mostrar usuário:', mostrarUsuario(nome));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // Exercício 4


var empresa = {
  nomeFantasia: 'Pedido Agora',
  endereco: {
    cidade: 'Ourinhos',
    estado: 'SP'
  }
};
console.log(empresa);
var nomeFantasia = empresa.nomeFantasia,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nomeFantasia);
console.log(cidade);
console.log(estado);

function mostrarInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostrarInfo({
  nome: 'Felipe',
  idade: 35
})); // Exercício 5

var spreadArr = [1, 2, 3, 4, 5, 6];
var x = spreadArr[0],
    y = spreadArr.slice(1);
console.log(x);
console.log(y);
var usuario1 = {
  nome: 'Felipe',
  idade: 35,
  endereco: {
    cidade: 'Ourinhos',
    estado: 'SP',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario3 = _objectSpread(_objectSpread({}, usuario1), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario1.endereco), {}, {
    cidade: 'Lontras'
  })
});

console.log(usuario3); // Exercício 6

console.log("O usu\xE1rio ".concat(nome, " possui ").concat(idade, " anos.")); // Exercício 7

var shortObj = {
  nome: nome,
  idade: idade,
  cidade: cidade
};
console.log(shortObj);
