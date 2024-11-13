
var modal = document.getElementById("Modal");


var span = document.getElementsByClassName("close")[0];


var articles = document.querySelectorAll("main article");

articles.forEach(function(article) {
    article.addEventListener("click", function() {
        var title = article.querySelector("h2").innerText;
        var content = article.querySelector("p").innerText;
        document.getElementById("modalTitre").innerText = title;
        document.getElementById("modalContenue").innerText = content;
        modal.style.display = "block";
    });
});


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}