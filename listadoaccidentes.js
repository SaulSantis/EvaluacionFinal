


 $(document).ready(function(){

    $("#fechaacc").datepicker();

    
    

    $("#btnvalidar").click(function(){

        $("#formulario").validate({
            rules: {
                idacc: {
                    required: true,
                    digits: true,
                    max: 9999,
                    min: 1
                },
                fechaacc: {
                    required: true,
                   
                },
                horaacc: {
                    required: true,
                   
                },
                lugaracc: {
                    required: true,
                    minlength:0,
                    maxlength:150
                },
                origenacc: {
                    required: true,
                    minlength: 0,
                    maxlength: 100
                },
                clienteacc: {
                    required: true,
                     
                }
                


            }
            

       

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









