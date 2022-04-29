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

const porcentaje=(a,b)=>a%b==0||b%a==0?"Son algo":"No son algo"
console.log(porcentaje(45,56))


//PRIMOS

function primo(a) {
let x=0
for(i=1;i<=a;i++){
    if (a%i==0) {
        x++
}   }

    if (x==2){
        console.log(`El numero ${a} es primo`)
    }else{
        console.log(`El numero ${a} no es primo`)
    }

}

primo(1)

//descuento

function descuento (valor,pordes){
    let = desc = 0
    desc= valor*pordes/100

    valorfinal=valor-desc

    console.log(`El valor final es de ${valorfinal}`)
}

descuento(100000,15)

//FECHA

function fecha(a) {
var dia = new Date(a);
var hoy = new Date();
console.log(dia);
console.log(hoy);
console.log()
var x = hoy.toISOString().split("T")[0]
if(dia<x){
    console.log("la fecha que coloco es anterior")
}else if(dia>x){
    console.log("la fecha que coloco es posterior")
}else{
    console.log("la fecha que coloco es actual")
}
}
fecha("2022-04-29")