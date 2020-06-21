let URL ="http://localhost:3000/";

window.onload = function(){
    getFilmes((status, movies) => {
    showFilmes(filmes);    
    })
}

function getFilmes(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL + "movies", true);
    xhr.responseType = 'json';
    
    xhr.onload = function (){
        var status = xhr.status;
        if (status === 200){
            callback(status, xhr.response);
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
        "<p>Nome:"+ movies[i].name +"</p>"+
        "<p>Classificação:"+ movies[i].classfication +"</p>"+
        "<p>Id:"+ movies[i].id +"</p>"+
        "<p>Genêro:"+ movies[i].genre +"</p>"+
        "</article>";
    }
    html+= "</section>"

    document.getElementById("movies").innerHTML = html;
}
