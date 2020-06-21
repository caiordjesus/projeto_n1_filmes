function render_graph(){
    historicalBarChart = [
        {
            key: "Generos preferidos",
            values: [
                {
                    "label" : "Ação",
                    "value" : 29
                },
                {
                    "label" : "Comédia",
                    "value" : 25
                },
                {
                    "label" : "Romance",
                    "value" : 32
                },
                {
                    "label" : "Terror",
                    "value" : 26
                },
            ]
        }
    ];

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
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

window.onload = function(){
    render_graph()
}