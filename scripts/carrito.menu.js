let postre = 730;
var Total = 0;
var boton1 = document.getElementById('boton1');
var TotalElemento = document.getElementById('Total');
//calculadora del carrito
boton1.addEventListener('click', function() {
    Total = Total + postre;
    
    TotalElemento.innerHTML = Total;
});

let milanesa = 2300;
var boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function() {
    Total = Total + milanesa;

    TotalElemento.innerHTML = Total;
})

let guarnision = 1500;
var boton3 = document.getElementById('boton3');

boton3.addEventListener('click', function() {
    Total = Total + guarnision;

    TotalElemento.innerHTML = Total;
})
//lista del carrito
function agregar2(){
    let opcion3 = ('Postre de frutilla');
    let ul = document.getElementById('listacarro');
    let li = '<li>' + opcion3 + '</li>';
    ul.innerHTML += li;
    opcion3 = '';
}
function agregar1(){
    let opcion2 = ('Milanesa con papas');
    let ul = document.getElementById('listacarro');
    let li = '<li>' + opcion2 + '</li>';
    ul.innerHTML += li;
    opcion2 = '';
}
function agregar(){
    let opcion1 = ('Guarnision de pollo y verduras');
    let ul = document.getElementById('listacarro');
    let li = '<li>' + opcion1 + '</li>';
    ul.innerHTML += li;
    opcion1 = '';
}