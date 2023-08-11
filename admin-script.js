var StoredCode=localStorage.getItem("CodeCart");
var StoredCart=localStorage.getItem("PanCart")
var table=document.getElementById('TableArt').innerHTML=StoredCart
var date=new Date().toLocaleDateString()
var NewDate=document.getElementById('date').innerHTML=date
var code=document.getElementById('key').innerHTML='Code du panier : PA'+StoredCode
