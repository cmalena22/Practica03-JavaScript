function validarCamposObligatorios()
{
    var bandera = true
    
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = 'La cedula esta vacia'
            }
            
            elemento.style.border = '1px red solid'
            elemento.className = 'error'            
            bandera = false
        }else{
            if(elemento.id == 'cedula'){
                document.getElementById('msjCedula').innerHTML= ''
            }
            elemento.style.border = '1px black solid'
            
        }
    }
    
    if(!bandera){
        alert('Error: revisar los comentarios')
    }

    return bandera

}

function validarLetras(string){
    var out = '';
    ca= document.getElementById("nombre").value
   
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
        for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
        out += string.charAt(i);
    return out;

   
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

function validarNumero(e, fono){
    var key = window.event ? e.keyCode : e.which;
    if(((48 <= key && key <= 57) || (key == 0) || (key == 8)) && fono.value.length < 10){ 
        return true; 
    }else{ 
        return false; 
    } 
}

function validarCedula(cedul){
    var x=document.getElementById("cedula").value;
    var total=0;
    var longitud=x.length;
    var longcheck =longitud-1;
    if (longitud ==10){
        for(i=0;i<longcheck;i++){
            if(i % 2 ===0){
                var aux=x.charAt(i) *2;
                if (aux >=10) aux-=9;
                total +=aux;

            }else {
                total +=parseInt(x.charAt(i))
            }
        }
        total =total %10 != 0 ? 10 - total % 10 : 0;

        if(x.charAt(longitud -1 ) == total){
            return false;
        } else {
           
            alert('su cedula esta mal')
            return true;
        }
    }else {
        return false;
    }
}

function validarFecha(fecha) {
    var array =fecha.value.split('/');
    var fecha = new Date(+array[2], array[1]-1, array[0]);
    console.log(fecha)
    if (array.length == 3 && fecha 
        && +array[0] == fecha.getDate() 
        && array[1]-1 == fecha.getMonth() 
        && array[2] == fecha.getFullYear()) {
   
    console.log('hola')
    document.getElementById("fecha").innerHTML= ''
    
        }
        else {
            document.getElementById('fecha').innerHTML='mal'
           
            alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
            return true;
        }
    
}

function validarEmail(mail){
    var arroba = mail.value.indexOf("@");
    if( arroba ==-1 ){
        document.getElementById("msjEmail").innerHTML= 'correo inválido sin @'
    }else{
        var dominio = mail.value.substring(arroba, mail.value.length)
        var idMail = mail.value.substring(0, arroba)
        if((dominio != "@ups.edu.ec" && dominio != "@est.ups.edu.ec")){    
            document.getElementById("msjEmail").innerHTML=  '<br>Debe de ser: @est.ups.edu.ec ó @ups.edu.ec</br>'
        }else if(idMail.length < 3){
            document.getElementById("msjEmail").innerHTML= '<br>Nombre de usuario menor a 3 caractéres.</br>'
        }else{
            document.getElementById("msjEmail").innerHTML= ''
        }
    }

}

function validarContra(contra){
    var con =contra.value;
    console.log(con.length)
    if(con.length <8){
        document.getElementById("mensaje").innerHTML='<br>Debe tener 8 </br>'
        alert('contraseña menor a 8')
    }else if (con.length >8) {
        document.getElementById("mensaje").innerHTML='<br>Debe tener 8 </br>'
        alert('no contraseña mayor a 8')
        
    }
}
function validar_clave(contrasenna)
{
    var x=document.getElementById('password').value
    if(x.length >= 8)
    {		
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;
        
        for(var i = 0;i<x.length;i++)
        {
            if(x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90)
            {
                mayuscula = true;
            }
            else if(x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122)
            {
                minuscula = true;
            }
            else if(x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57)
            {
                numero = true;
            }
            else
            {
                caracter_raro = true;
            }
        }
        if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
        {
            return true;
        }else {
            alert('contraseña mal')
           // document.getElementById('mensaje').innerHTML='contraseña mal'

        }
    } else if  (x.length <8) {
       // document.getElementById("mensaje").innerHTML='<br>Debe tener 8 </br>'
        alert('no contraseña mayor a 8')
        
   
    return false;
   
}

}


