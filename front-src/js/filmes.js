let URL ="http://localhost:3000/";

window.onload = function(){
    getFilmes((status, movies) => {
    showFilmes(movies);    
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
   for(var i=0; i < movies.length; i++) {
        document.getElementById('t').innerHTML +=
         `<tr>
            <td>${movies[i].id}</td>
            <td>${movies[i].name}</td>
            <td>${movies[i].classification}</td>
            <td>${movies[i].genre}</td>
        </tr>`;
    }
}
