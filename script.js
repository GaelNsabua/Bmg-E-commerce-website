const recherche=() =>
{
    const searchbox=document.getElementById("search-items").value.toUpperCase();
    const storeitems=document.getElementById("list-produit");
    const produit=document.querySelectorAll(".produit2");
    const prodname=storeitems.getElementsByTagName("h2");
    
    for(var i=0; i<prodname.length; i++)
    {
        let match=produit[i].getElementsByTagName("h2")[0];
        if(match)
        {
            let textvalue=match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1)
            {
                produit[i].style.display="";
            }
            else
            {
                produit[i].style.display="none";
            }
        }
    }
}
