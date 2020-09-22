var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonAddElement = document.querySelector('#btn-add');
var buttonRemoveAllElement = document.querySelector('#btn-remove-all');
var repoList = JSON.parse(localStorage.getItem('list_repositories')) || [];

function addUser() {
    var username = inputElement.value;

    if (username === '') {
        alert('Informe o nome do usuário no GitHub');
        return;
    }

    renderLoading();
    getUserRepositories(username)
        .then(function (repositories) {
            repoList = [];

            for (repository of repositories) {
                repoList.push(repository.name);
            }

            inputElement.value = '';
            saveToStorage();
            renderRepositories();
        })
        .catch(function (error) {
            alert(error);
        });
}

function deleteAllRepositories() {
    repoList = [];
    renderRepositories();
    localStorage.removeItem('repo_l')
}

function deleteRepository(pos) {
    repoList.splice(pos, 1);
    renderRepositories();
    saveToStorage();
}

function getUserRepositories(username) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/' + username + '/repos');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                switch(xhr.status) {
                    case 200:
                        resolve(JSON.parse(xhr.responseText));
                        return;
                    case 404:
                        this.resetRepositoryList();
                        reject("Usuário não encontrado!");
                        return;
                    default:
                    reject("Ocorreu um erro ao adicionar o usuário!");
                    return;
                }
            }
        }
    });
}

function renderRepositories() {
    resetRepositoryList();

    for (repo of repoList) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo);
        var linkElement = document.createElement("a");
		var linkText = document.createTextNode("Excluir");

        linkElement.setAttribute("href", "#");
		linkElement.setAttribute("onclick", "deleteRepository(" + repoList.indexOf(repo) + ")");
		linkElement.appendChild(linkText);

		repoElement.appendChild(repoText);
		repoElement.appendChild(linkElement);

		listElement.appendChild(repoElement);
    }

    
}


function renderLoading() {
    resetRepositoryList();
    var loadElement = document.createElement('li');
    var loadText = document.createTextNode('Carregando...');

    loadElement.appendChild(loadText);
    listElement.appendChild(loadElement);
}

function resetRepositoryList() {
    listElement.innerHTML = "";
}

function saveToStorage() {
    localStorage.setItem('list_repositories', JSON.stringify(repoList));
}

renderRepositories();

buttonAddElement.onclick = addUser;
buttonRemoveAllElement.onclick = deleteAllRepositories;
