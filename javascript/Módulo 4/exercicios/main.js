function checkAge(age) {
    return new Promise(function (resolve, reject) {
        if (age >= 18) {
            resolve(age);
        } else {
            reject(age);
        }
    });
}

checkAge(35)
    .then(function () {
        console.log('Idade maior ou igual à 18')
    })
    .catch(function () {
        console.log('Idade menor que 18');
    });
