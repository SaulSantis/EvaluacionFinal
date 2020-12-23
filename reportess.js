

    let miCanvas=document.getElementById("GraficoCli").getContext("2d");

    var chart = new Chart(miCanvas,{
       type: "bar",
       data: {
           labels: ["Recoleta", "Santiago", "Maipu", "Colina", "Ñuñoa,","San bernardo"],
           datasets: [
                   {
                       label: " Grafica de Clientes por Comuna",
                       backgroundColor:"rgb(127, 255, 212)",
                       borderColor:"rgb(0,255,0)",
                       data:[56,80,78,23,59,67]
                   }
           ]
       }
    })
    



    
    //grafico reportes
    
        /*
        //grafico visita accidente
        let miCanvas=document.getElementById("graficoacci").getContext("2d");
   
        var chartAcc = new Chart(miCanvas,{
           type: "line",
           data: {
               labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo,","Junio", "Julio", "Agosto","Septiembre", "Octubre",
               "Noviembre", "Diciembre"],
               datasets: [
                       {
                           label: "Cantidad de Accidentes",
                           backgroundColor:"rgb(127, 255, 212)",
                           borderColor:"rgb(0,255,0)",
                           data:[10,12,20,18,17,56,45,56,78,23,12,23]
                       },
                       {
                           label: "Cantidad de Visitas",
                           backgroundColor:"rgb(127, 0, 212)",
                           borderColor:"rgb(0,255,0)",
                           data:[270,250,450,230,150,127,260,100,150,180]
                       }
               ]
           }
        })*/

        

    