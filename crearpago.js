var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth()+1) + "/" + f.getFullYear());

function validacion() {

var añoPago = document.getElementById("añopago");
var rutCli = document.getElementById("rutcli");
var montoPago = document.getElementById("montopago");
var mesPago = document.getElementById("mespago");

var añopagoNum = parseInt(añoPago.value);   
var montopagoNum = parseInt(montoPago.value);  


if (añoPago.value == "" || añoPago.value == null || rutCli.value =="" || rutCli.value ==null ||
        montoPago.value == "" || montoPago.value == null || mesPago.value == "" ||  mesPago.value == null){
            alert("campos vacios");
            return false;
        }
else if (2010 > añopagoNum || añopagoNum > 2050){
            alert( "[ERROR]ingrese un año valido entre 2010 y 2050");
            return false;
         }
else if (montopagoNum < 0 || montopagoNum > 99999999){
            alert("[ERROR]ingrese un monto entre 0 y 99999999");
            return false;      
        } 
else if (mesPago.value != "enero" && mesPago.value != "febrero"  && mesPago.value != "marzo"  && mesPago.value != "abril"  && mesPago.value != "mayo"  && mesPago.value != "junio"  && mesPago.value != "julio"  && mesPago.value != "agosto"  && mesPago.value != "septiembre"  && mesPago.value != "octubre"  && mesPago.value != "noviembre"  && mesPago.value != "diciembre" ) { 
             alert("[ERROR]mes invalido");
             return false; 
        } 

            alert("datos ingresados");
         return true;  
         
       
            
}   

function myFunction() {
    var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } 
        else {
        x.className = "topnav";
        }
    }




