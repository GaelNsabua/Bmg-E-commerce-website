 function AddToCart() 
 {
     let NomArt=document.getElementById('Nom-Art').textContent
localStorage.setItem("NameArt", NomArt);
let PrixArt=document.getElementById('Prix-Art').textContent
localStorage.setItem("PriceArt", PrixArt);
var QuantArt=document.getElementById('quantité').value
localStorage.setItem("QuantityArt", QuantArt);
window.location.href='../panier-1.html'
 }
 
 var Stat=document.getElementById('statut').textContent
 if(Stat!="Disponible")
 {
     text=document.getElementById('bout').style.display="none"
 }
