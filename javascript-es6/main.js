class List {
    
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List {
    
    constructor() {
        super();
        
        this.user = 'Felipe';
    }

    mostraUsuario() {
        console.log(this.user);
    }
}

class Matematica {
    static soma (a, b) {
        return a + b;
    }
}

var MinhaLista = new TodoList();

document.getElementById("add-todo").onclick = function () {
	MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();
console.log(Matematica.soma(1, 2));