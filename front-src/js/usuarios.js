var url = 'http://localhost:3000/users'

function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        let status = xhr.status;
        if (status === 200){ 
            callback(status, xhr.response);    
        } else {
            // Lembre-se de colocar uma função que trata o erro
            console.log("Deu erro: " + status);
        }
    }
    xhr.send();
}

function getUsers(){
    getJSON(url, function(status, data){
        console.log(data)

        for(let user of data){
            let generos = 'NI'
            if(user.fgenre.length > 0){
                generos = user.fgenre.map(x => x.name).join(', ')
            }
            document.getElementById('table_usuarios').innerHTML += `
                <tr>
                    <td>${user.genero}</td>
                    <td>${user.email}</td>
                    <td>${generos}</td>
                </tr>  
            `;
        }
    });
}

window.onload = function(){
    getUsers()
}