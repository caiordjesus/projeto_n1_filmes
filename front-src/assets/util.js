// chartDataCompensacao = [ 
//     {
//       key: "Geradora",
//       values: []
//     },
//     {
//       key: "Distribuidora",
//       values: []
//     }
//   ];

// chartValues1.push({"label": 'Geração',"y": vl_ENERGIA_GERADA});

// for(i in chartValues1){
//     if(chartValues1[i].y < 0){
//       chartValues1[i].y = 0
//     }
//     else {
//       chartValues1[i].y = Math.trunc(chartValues1[i].y)
//     }
//  }
//  chartDataCompensacao[0].values = chartValues1;

function multiBarChart(idGrafico, chartData, titulo="") {

    var chart = new CanvasJS.Chart(idGrafico, {
        animationEnabled: true,
        title:{
            text: titulo
        },	
        axisY: {
            title: "kWh",
            titleFontColor: "black",
            lineColor: "black",
            labelFontColor: "black",
            tickColor: "black",
            gridThickness: 0.2
        },	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: chartData[0].key,
            legendText: chartData[0].key,
            color: 'rgba(0,188,212,0.8)',
            showInLegend: true, 
            dataPoints: chartData[0].values
        },
        {
            type: "column",	
            name: chartData[1].key,
            legendText: chartData[1].key,
            color: 'rgba(0,0,0,0.4)',
            showInLegend: true,
            dataPoints: chartData[1].values
        }]
    });

    //showDefaultText(chart, "Não existem dados referentes ao mês buscado");
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
      
}