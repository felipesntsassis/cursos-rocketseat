// Exercício 1
class Usuario {

    constructor(email, password) {
        this.admin = false;
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        return this.admin;
    }

}

class Admin extends Usuario {

    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }

}

const User1 = new Usuario('email1@teste.com', 'senha123');
const User2 = new Admin('email1@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(User2.isAdmin());

// Exercício 2
const usuarios = [
    { nome: 'Felipe', idade: 35, empresa: 'Pedido Agora' },
    { nome: 'Fernanda', idade: 37, empresa: 'Pedido Agora' },
    { nome: 'Camila', idade: 22, empresa: 'Escolpi Informática' }
];

const idades = usuarios.map(usuario => usuario.idade);
console.log('Map: ', idades);

const filter = usuarios.filter(usuario => usuario.idade > 35 && usuario.empresa === 'Pedido Agora');
console.log('Filter:', filter);

const find = usuarios.find(usuario => usuario.empresa === 'Google');
console.log('Find:', find);


const arrUniao = usuarios
    .map(usuario => {
    usuario.idade = usuario.idade * 2;
    return usuario;
    }).find(usuario => usuario.idade <= 50);
console.log('União de operações', arrUniao);

// Exercício 3
const arr = [1, 2, 3, 4, 5];
const map = arr.map(item => item + 10);
console.log('Map', map);

const usuario = {
    nome: 'Felipe',
    idade: 35
};

const mostrarIdade = (usuario) => usuario.idade;
console.log('Mostrar Idade: ', mostrarIdade(usuario));

const nome = 'Felipe';
const idade = 35;
const mostrarUsuario = (nome = 'Felipe', idade = 18) => ({ nome, idade });
console.log('Mostrar usuário:', mostrarUsuario(nome, idade));
console.log('Mostrar usuário:', mostrarUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());

// Exercício 4
const empresa = {
    nomeFantasia: 'Pedido Agora',
    endereco: {
        cidade: 'Ourinhos',
        estado: 'SP'
    }
};
console.log(empresa);
const { nomeFantasia, endereco: { cidade, estado } } = empresa;
console.log(nomeFantasia);
console.log(cidade);
console.log(estado);

function mostrarInfo(usuario) {
    const { nome, idade } = usuario;
    return `${nome} tem ${idade} anos.`;
}

console.log(mostrarInfo({ nome: 'Felipe', idade: 35}));

// Exercício 5
const spreadArr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = spreadArr;
console.log(x);
console.log(y);

const usuario1 = {
    nome: 'Felipe',
    idade: 35,
    endereco: {
        cidade: 'Ourinhos',
        estado: 'SP',
        pais: 'Brasil'
    }
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);
const usuario3 = { ...usuario1, endereco: { ...usuario1.endereco, cidade: 'Lontras' }};
console.log(usuario3);

// Exercício 6
console.log(`O usuário ${nome} possui ${idade} anos.`);

// Exercício 7
const shortObj = {
    nome,
    idade,
    cidade
};
console.log(shortObj);
