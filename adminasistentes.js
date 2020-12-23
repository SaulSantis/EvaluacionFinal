
$(document).ready(function(){

    $('#tablaasis').DataTable();

    $("#btnvalidar").click(function(){

       

        $("#reg-asis").validate({
            rules: {
                idasis: {
                    required: true,
                    digits: true,
                    max: 9999,
                    min: 1
                },
                nomcom: {
                    required: true,
                    maxlength: 99,
                    minlength: 1
                },
                edad: {
                    required: true,
                    digits:true,
                    max: 149,
                    min: 1
                },
                email: {
                    required: true,
                    email: true
                  },
                tel: {
                    required:true,
                    digits: true,
                    minlength:8,
                    maxlength:8
                }  
                


            }

            }
        );
           
    })

});
















    /*$(document).ready(function() {
    $("#reg-asist").submit(function () {  
        if($("#nomcom").val().length < 5) {  
            alert("El nombre debe tener como mínimo 5 caracteres");  
            return false;  
        }  
        return false;  
    }); 



});*/

        


   


  
  