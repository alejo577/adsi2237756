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
//PAR/IMPAR
let num=parseInt(prompt("Indique un número:"));

if((num % 2) == 0){
  par();
}else{
  impar();
}
//FUNCIONES
function par(){
console.log(num+"es par");
}
function impar(){
console.log(num+"es impar");
}

//SUMA
let num1=parseInt(prompt("Indique un número:"));
let num2=parseInt(prompt("Indique el segundo numero número:"));

suma()

//FUNCIONES
function suma(){

var suma= num1+num2

console.log(suma);
}

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


//NUMEROS PRIMOS

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

//VALOR CON DESCUENTO

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

var y = dia.toISOString().split("T")[0]
var x = hoy.toISOString().split("T")[0]
console.log("La fecha ingresada es "+y);
console.log("La fecha actual es "+x);
if(y<x){
    console.log("la fecha que coloco es anterior")
}else if(y>x){
    console.log("la fecha que coloco es posterior")
}else{
    console.log("la fecha que coloco es actual")
}
}
fecha("2022-04-29")
