var url = 'http://localhost:3000/genre?grouped=true'

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

function render_graph(values){
    console.log('values =>', values)
    historicalBarChart = [
        {
            key: "Generos preferidos",
            values: values
        }
    ];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.genre })
            .y(function(d) { return d.qtd })
            .staggerLabels(true)
            //.staggerLabels(historicalBarChart[0].values.length > 8)
            .showValues(true)
            .duration(250)
            ;

        d3.select('#chart1 svg')
            .datum(historicalBarChart)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });
}

function get_favorite_genres(){
    getJSON(url, function(status, data){
        render_graph(data) 
    });
}

window.onload = function(){
    get_favorite_genres()   
}