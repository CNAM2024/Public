var utilisateurs = [
    {
        id: "Rudy",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Alexis",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Hugo",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Alexandre",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Olivier",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Noe",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Lucas",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Yasin",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Thomas",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Marouan",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Pierrick",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Ali",
        password: "mdp1",
        connexion:false
    },
    {
        id: "Johan",
        password: "mdp1",
        connexion:false
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
            location.href="./pages/accueil.html";
            utilisateurs[i].connexion = true

            return true
        }else{
            $('#message').text("Erreur, identifiant ou mot de passe n'est pas bon.")
        }
    }
}
