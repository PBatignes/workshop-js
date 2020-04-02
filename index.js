var url = "https://loisirs-web-backend.cleverapps.io/users";

function ajouter() {
    // récupérer la saisie
    var nom = document.querySelector("[name='name']").value;
    var mdp = document.querySelector("[name='password']").value;

    var data = {
        name: nom,
        password: mdp
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function(response) {
        rafraichir();
        document.querySelector("[name='name']").value = '';
        document.querySelector("[name='password']").value = '';
    })
}

function rafraichir() {

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {

            var contentHTML = data
                .filter(function(user) {
                    return user.name;
                })
                .map(function(user) {
                    return '<tr><td>' + user.id + '</td><td>' + user.name + '</td><td>' + user.password + '</td></tr>'
                }).join('');

            document.getElementById("tableau").innerHTML = contentHTML;
        });
}
rafraichir();