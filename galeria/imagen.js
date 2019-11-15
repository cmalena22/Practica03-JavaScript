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