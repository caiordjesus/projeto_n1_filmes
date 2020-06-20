let URL = 'http://localhost:3000/';

window.onload = function(){
    getGeneros((status, genre) => {
        printGeneros(genre);
    })
}

function getGeneros(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL + "genre", true);
    xhr.responseType = 'json';

    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200){
            callback(status, xhr.response);
            console.log("Show de Bola" + status);
        } else {
            console.log('Erro' + status);
        }
    }
    xhr.send();
}

function printGeneros(genre) {
    var html = "<section>";
    for(var i=0; i < genre.length; i++) {
        html += "<article>" +
            "<h1>" + genre[i].name + "</h1>" +
            "<p> id: " + genre[i].id + "</p>" +
            "</article>";
    }
    html += "</section>"

    document.getElementById("genre").innerHTML = html;
}