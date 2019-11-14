function validarCamposObligatorios()
{  
      var bandera = true  

    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            
            elemento.className = 'error'            
            bandera = false
        }

    }
    
    if(!bandera){
        alert('Error:Completar cambios')
    }

    return bandera

}
function validarLetras(elemento)
{    
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        console.log(miAscii)        
        if(miAscii >= 97 && miAscii <= 122){

            return true
        }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
    }else{
        return true
    }
    
}



function soloNumeros(e){
    var key = window.Event ? e.which : e.keyCode
    var letra= document.getElementById("telefono").value;
    console.log(letra) 
	return (key >= 48 && key <= 57 )
}



function validarCedula() {
    var cedula = document.getElementById("cedula").value.trim();
    if (cedula.substring(0, 2) > 10) {
        document.getElementById("cedula").classList.add('error');
        document.getElementById('cd').classList.add('p');
        alert('Cédula no válida');
        return true;
    } else {
        return false;
    }
}

function dosPalabras(string) {
    var out = '';
    var array = string.split(' ');
    if (array.length == 1){
        out += array[0];
    } else {
        out += array[0] + ' ' + array[1];
    }
    
    return out;
}


function validarFecha() {
    var array = document.getElementById('fechaNacimiento').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    
    if (array.length == 3 && fecha
     && array[0] == fecha.getDate() 
     && array[1] == fecha.getMonth() 
     && array[2] == fecha.getFullYear()) {
      alert('muy bien la fecha')
      return false;
    } else {
        document.getElementById('fechaNacimiento').classList.add('error')
        alert('esta mal el formato')
    
        return true;
        
    }
}


function validarCorreo() {
    var array = document.getElementById('correo').value.split('@');
    console.log(array)

    if(array[0].length < 3) {
        document.getElementById('correo').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec')) {
            document.getElementById('ema').classList.add('error');
            document.getElementById('e').classList.add('p');
            alert('Extensión no válida')
            return true;
        } else {
            return false;
        }
        
    } 
}