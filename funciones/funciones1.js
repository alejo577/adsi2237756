console.log("trabajo con funciones");
//function saludo(nombre){
//return `hola ${nombre}`
//}
//
//
//console.log(saludo("Maria"))
//
//
//
//var s ="gusto saludar"
//s=saludo("Maria ")+s
//console.log(s)


//ejercicio de cual es mayor

var a;
var b;


function calcular(a,b) {
if(a>b){
    console.log(a+"   es mayor");
}
else if(a<b){
    console.log(b+"   es mayor");
}
else{
    console.log("los dos numeros son iguales")
}
}
calcular(57,45)



//funciones flecha

const x=()=>"Hola"
console.log(x())

//ejemplos funciones flecha

//tiene solo un parametro

const y=nombre=>`hola ${nombre}`
console.log(y("luis"))

//tiene solo dos parametros

const x=(nombre,apellido)=>`hola ${nombre} ${apellido}`
console.log(x("luis","Pulido"))

//funciones flecha con el ejercicio de cual es mayor

const calcular=(a,b)=>{
if(a>b){
    console.log(a+"   es mayor");
}
else if(a<b){
    console.log(b+"   es mayor");
}
else{
    console.log("los dos numeros son iguales")
};
}

calcular(1,2)


//condicion ternaria 

let a=10, b=12


