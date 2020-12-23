$(document).ready(function(){
    $("#boton1" ).click(function(){
        $("#lista1").toggle();
        $("#boton2" ).click(function(){
            $("#lista2").toggle();
            $("#boton3" ).click(function(){
                $("#lista3").toggle();
                    
            });     
        });
    });
});

        
        $(document).ready(function(){
            $("#btn1").click(function(){
                $("#tab").css({"width":"50%", "border": "1px solid #000","background-color":"#008891","color":"#e7e7de"});
                 $("#btn2").click(function(){
                    $("#tab").css({"width":"50%", "border": "1px solid #000","background-color":"#fafcc2","color":"#0d7377"});
                    $("#btn3").click(function(){
                        $("#tab").css({"width":"50%", "border": "1px solid #000","background-color":"#4e89ae","color":"#f6f6f6"});
                   
    
           
                    });
                });
            });
        });

        function myFunction() {
            var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } 
                else {
                x.className = "topnav";
                }
            }
        
      /*  $(document).ready(function(){
            $("#btn").click(function(){
            $("p").css("background-color", "yellow");
            });
        });*/




