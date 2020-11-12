
var file = document.getElementById("file");  
var enviar = document.getElementById("enviar"); 
enviar.addEventListener("click", function(){ file.click(); }) 

const formu = document.querySelector(".formu");
const adicionar = document.querySelector("#adicionar");
const image = document.querySelector("#compras");
adicionar.addEventListener("clik", (Event) => {
    Event.preventDefault()
    
const newProduc = {
    nome: formu.getElementById("nproduct").value,
    preço: formu.getElementById("pproduct").value,
    descripcion: formu.getElementById("subject").value,
    imgProducto: formu.getElementById("compras") .value
} 
localStorage.setItem("newproduct", JSON.stringify(product))   
})
const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
products.push(newproduct)
localStorage.setItem("products", JSON.stringify(products))

window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        while (this.file && this.file[0]){
            let image = document.querySelector('#compras')
            image.src = URL.createObjectURL(this.file[0]);
            image.onload = imageProduct;
            alert('Enviado!');
            document.getElementById('formu').reset();
        }
    })
})