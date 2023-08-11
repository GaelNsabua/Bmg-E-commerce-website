
var StoredName=localStorage.getItem("NameArt")
var StoredPrice=localStorage.getItem("PriceArt")
var StoredQuant=localStorage.getItem("QuantityArt")
var StoredCode=localStorage.getItem("CodeCart");
var Storedtotal=localStorage.getItem("totalCart")
var StoredCart=localStorage.getItem("PanCart")
var table=document.getElementById('TableArt').innerHTML=StoredCart
Totalite=document.getElementById('totalité').innerHTML=Storedtotal+'Fc'

/*code permettant de recuperer le code du panier à partir du navigateur*/

    if(StoredCode)
    {
        var KeyPass=document.getElementById('code').innerHTML='Voici le code de votre panier : PA'+StoredCode
        var saved=document.getElementById('sauv').style.display="none"
    }
 

/*Fonction permettant d'ajouter un article au panier*/
function AddCart()
{
    
    var table=document.getElementById('TableArt')
    var NewTr=document.createElement('tr')
    var NewTd1=document.createElement('td')
    var NewTd2=document.createElement('td')
    var NewTd3=document.createElement('td')
    var NewTd4=document.createElement('td')
    var NewTd5=document.createElement('td')
    let Name=StoredName
    let Prix=StoredPrice
    let Quant=StoredQuant
    NewTd1.innerHTML='<button onclick="RemoveCart(this)">Retirer</button>'
    NewTd2.innerHTML=Name
    NewTd3.innerHTML=Prix+'Fc'
    NewTd4.innerHTML=Quant
    NewTd5.innerHTML=Prix*Quant+'Fc'
    
    NewTr.appendChild(NewTd1)
    NewTr.appendChild(NewTd2)
    NewTr.appendChild(NewTd3)
    NewTr.appendChild(NewTd4)
    NewTr.appendChild(NewTd5)

    table.appendChild(NewTr)
    
    UpdatePrice()
    Save()
}


/*Fonction permetannt de sauvegarder le tableau une fois modifié*/
function Save() 
{
    let ChartCart=document.getElementById('TableArt')
    if(ChartCart)
    {
        let Mytable=ChartCart.outerHTML
        localStorage.setItem("PanCart", Mytable);
    }
    else
    {
        alert('le tableau n\'a pas été trouvé')
    }
}
    
/*Fonction permettant de générer le code du panier*/
function Panier()
{
    let code=Math.floor(Math.random()*15000000)
    let KeyPass=document.getElementById('code').innerHTML='Voici le code de votre panier : PA'+code
    localStorage.setItem("CodeCart", code);
    
}

/*Fonction permettant de retirer un article du panier*/
function RemoveCart(button)
{
   var Rem=button.parentNode.parentNode
   var table=Rem.parentNode
   table.removeChild(Rem)
   var Totalite=document.getElementById('totalité').innerHTML=0
   UpdatePrice()
   Save()
}

/*Fonction permettant de calculer le prix total */
function UpdatePrice()
{
    
    var tableau=document.getElementById('TableArt')
    var TrPrice=tableau.getElementsByTagName('tr')
    
    let UnitPrix=0
    let total=0
    for(let i = 0; i < TrPrice.length; i++)
    {
        let Pricetr=TrPrice[i].getElementsByTagName('td')
        let PrixTd=Pricetr[4].textContent
        UnitPrix=parseInt(PrixTd)
        if (!isNaN(UnitPrix))
        {
            total +=UnitPrix
        }
    }
   
    var Totalite=document.getElementById('totalité').innerHTML=total+'Fc'
    localStorage.setItem("totalCart", total);
}


    