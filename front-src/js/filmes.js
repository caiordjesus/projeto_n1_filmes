let BASE_URL ="http://localhosy:3000/movies/";

window.onload = function(){
    getFilmes((status, filmes) => {
    showFilmes(filmes);    
    })
}

function getFilmes(filme){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL + "movies", true);
    xhr.responseType = 'json';
    
    xhr.onload = function (){
        var status = xhr.status;
        if (status === 200){
            filme(status, xhr, response);
            console.log("OK" + status);
        } else {
            console.log("NAO ACEITO" + status);
        }
    }
    xhr.send();
}

function showFilmes(movies){
    var html= "<section>";
    for(var i=0; i<movies.length; i++){
        html += "<article>" +
        "<p>"+ movies[i].name +"</p>"+
        "<p>"+ movies[i].classfication +"</p>"+
        "<p>"+ movies[i].id +"</p>"+
        "<p>"+ movies[i].genre +"</p>"+
        "</article>";
    }
    html= "</section>"

    document.getElementById("movies").innerHTML = html;
}
