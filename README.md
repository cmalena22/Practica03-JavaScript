# Practica03-JavaScript
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <title>Hola</title>
    <!--<script  src="validacion.js"></script>-->
    <script type="text/javascript" src="validacion.js"></script>
    <link rel="stylesheet" type="text/css" href="formulario.css">
</head>

<body>
        <h1>Formulario</h1>
        <form id="formulario01" method="POST"  action="bien.php" onsubmit="return validarCamposObligatorios()">
                <label for="cedula">Cedula (*)</label>
                <input type="text" id="cedula" name="cedula" value="" placeholder="Ingrese el número de cedula ..."
                onkeypress="return validarNumero(event, this)"
                onkeyup="validarCedula(this)" />
                <span id="mensajeCedula" class="error"></span>        
                <br>
        
                <label for="nombres">Nombres (*)</label>
                <input type="text" id="nombre" name="nombre" value="" placeholder="Ingrese sus dos nombres ..." 
                onkeyup="this.value = validarLetras(this.value)"/>
                <span id="mensajeNombre" class="error"></span>
                <br>
        
                <label for="apellidos">Apelidos (*)</label>
                <input type="text" id="apellido" name="apellido" value="" placeholder="Ingrese sus dos apellidos ..."
                onkeyup="this.value = validarLetras(this.value)" 
                onchange="this.value = dosPalabras(this.value)"/>
                <br>
                <span id="mensajeApellido" class="error"></span>
        
                <label for="direccion">Dirección (*)</label>
                <input type="text" id="direccion" name="direccion" value="" placeholder="Ingrese su dirección ..."
                onkeyup="this.value = validarLetras(this.value)"/>
                <br>
                <span id="mensajeDireccion" class="error"></span>

                <label for="telefono">Teléfono (*)</label>
                <input type="text" id="telefono" name="telefono" value="" placeholder="Ingrese su número telefónico ..."
                onkeypress="return validarNumero(event, this)" />
                <br>                
                <span id="mensajeTelefono" class="error"></span>
        
                <label for="fecha">Fecha Nacimiento (*)</label>
                <input type="text" id="fechaNacimiento" name="fechaNacimiento" value="" placeholder="dd/mm/yyyy..." 
                onchange="return validarFecha(this)"/>
                <span id="fecha"></span>  
                <br>


                

                <label for="correo">Correo electrónico (*)</label>
                          
                <input type="text" placeholder="E-mail(*)" id="mail" onchange="return validarEmail(this)"/>  
                <span id="msjEmail"></span>  
                <br>


                
                <label for="contra">Contraseña (*)</label>
                <input type="text" id="password" name="password" value="" placeholder="Ingrese su contraseña ..."
                onchange="validar_clave(this)"/>
                <span id="mensaje" ></span>
                <br>



                <input type="submit" id="crear" name="crear" value="Aceptar" />
                <input type="reset" id="cancelar" name="cancelar" value="Cancelar" />
            </form>    
         
        
      

</body>

</html>
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
html{
    margin:0 auto ;
    width: 40%;
    max-width: 1000px;
    min-width:500px;
}

body {
	margin: 0 auto;
	width: 100%;
	max-width: 1120px;
}
html {  
    background-color: #FE5F55;
   }  
  body { 
    background-color: #EEF5DB; 
       }
       form {   
        /* Para ver el borde del formulario */
        padding: 1em;
        border: 2px solid #333745;
        border-radius: 2em;
    }
    label {
        /* Para asegurarse que todos los labels tienen el mismo tamaño y están alineados correctamente */
        display: inline-block;
        width: 90px;
        text-align: right;
        margin-left: .5em;
        padding-left: 90px;
    }

    .error {
        color: red;
        font-size: 8px;
    }
    .p {
display: block !important;
color: red;
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
   <link type="text/css" rel="stylesheet" href="imagen.css"/>
   <script type="text/javascript" src="imagen.js"></script> 
</head>
<body>
   
        
        
        <img src="" id="imagen" alt="" width="500" height="500"> <br>
      
        
        <button onclick="atras()">siguiente</button>
        <button  onclick="iniciar()">iniciar</button>
        <input type="button" name="siguiente" id="siguiente" value="Siguiente" onclick="siguiente()">
        


</body>
</html>
html{
    margin:0 auto ;
    width: 40%;
    max-width: 1000px;
    min-width:500px;
}

body {
	margin: 0 auto;
	width: 100%;
	max-width: 1120px;
}
html {  
    background-color: #FE5F55;
   }  
  body { 
    background-color: #EEF5DB; 
       }




body text{
    width: 32%;

}

var ima=['../imagenes/foto1.jpg','../imagenes/foto2.jpg','../imagenes/foto3.jpg',
        '../imagenes/foto4.jpg','../imagenes/foto5.jpg','../imagenes/foto6.png',
        '../imagenes/foto7.jpg','../imagenes/foto8.jpg','../imagenes/foto9.jpg',
        '../imagenes/foto10.jpg'];

var A=[]
num=0;
for ( i = 0; i <=4; i++) {
  A[i]=ima[Math.floor(Math.random()*ima.length)];
   console.log(A) 

}

function iniciar(){  
 
  document.getElementById("imagen").src=A[0];

}
function siguiente (){
 
num++;
if(num>=A.length)
{
  num=0;
}
document.getElementById("imagen").src=A[num];    
document.getElementById("siguiente").disable=false;
}

function atras (){

  num--;
  if(num>A.length-1)
  {
       
num=0;
     
  }
        document.getElementById("imagen").src=A[num]; 
    
}
  

//function siguiente(){
  //  var getRandomNumber = Math.floor(Math.random()*5);
    //    document.getElementById("imagen").src=ima[getRandomNumber];
      //  console.log(getRandomNumber);
        
//}