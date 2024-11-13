var utilisateurs = [
    {
        id: "Rudy",
        password: "mdp1"
    },
    {
        id: "Alexis",
        password: "mdp1"
    },
    {
        id: "Hugo",
        password: "mdp1"
    },
    {
        id: "Alexandre",
        password: "mdp1"
    },
    {
        id: "Olivier",
        password: "mdp1"
    },
    {
        id: "Noe",
        password: "mdp1"
    },
    {
        id: "Lucas",
        password: "mdp1"
    },
    {
        id: "Yasin",
        password: "mdp1"
    },
    {
        id: "Thomas",
        password: "mdp1"
    },
    {
        id: "Marouan",
        password: "mdp1"
    },
    {
        id: "Pierrick",
        password: "mdp1"
    },
    {
        id: "Ali",
        password: "mdp1"
    },
    {
        id: "Johan",
        password: "mdp1"
    }
]


function logon(id, mdp){
    console.log(id, mdp)
    if(id === '' || mdp === ''){
        $('#message').text('Merci de saisir votre identifiant et votre mot de passe.')
    }

    for (let i = 0; i < utilisateurs.length; i++) {
        console.log(utilisateurs[i].id, utilisateurs[i].password)
        if(utilisateurs[i].id == id && utilisateurs[i].password == mdp){
            location.replace("http://autonomie.cfai24.ajformation.fr/CNAM24/blog.html");
            return true
        }else{
            $('#message').text("Erreur, identifiant ou mot de passe n'est pas bon.")
        }
    }


}