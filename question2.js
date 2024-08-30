let name=document.getElementById("name");
let price=document.getElementById("price");
let quantity=document.getElementById("Quantity");
let rating=document.getElementById("rating");
let save=document.getElementById("save");

let result;
function show(name,price,quantity,rating){
    const show=document.getElementById("show");
    result+=`<p> Name: ${name.value} <br> Price: ${price.value} <br> Quantity :${quantity.value} <br> Rating: ${rating.value} </p>`;
    show.innerHTML=result;
}


save.addEventListener("click",(a)=>{
    show(name,price,quantity,rating);
   
})