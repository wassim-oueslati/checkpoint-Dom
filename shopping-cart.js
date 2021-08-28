var total=0;

//add button
var buttonsPlus = document.getElementsByClassName("add");

for (let btnPlus of buttonsPlus) {
    btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;

    let quantity=btnPlus.parentNode.children[5].innerHTML;
    quantity=parseFloat(quantity);
    
    let pricee=btnPlus.parentNode.children[7].children[0].innerHTML;
    pricee=parseFloat(pricee);
        
    let subtotal = pricee * quantity;   
    btnPlus.parentNode.children[8].children[0].innerText=subtotal;
        
        
    document.getElementById("total-basket").innerHTML=calcTotal();
    
  });
}

//Reduce button
var buttonsMinus = document.getElementsByClassName("minus");

for (let btnMinus of buttonsMinus) {
    btnMinus.addEventListener("click", function () {
    if (btnMinus.previousElementSibling.innerText > 0)
      btnMinus.previousElementSibling.innerText--;
      
      let quantity=btnMinus.parentNode.children[5].innerText;
      quantity=parseFloat(quantity);
    
      let pricee=btnMinus.parentNode.children[7].children[0].innerText;
      pricee=parseFloat(pricee);
        
      let subtotal = pricee*quantity;
      btnMinus.parentNode.children[8].children[0].innerText=subtotal;
        
      document.getElementById("total-basket").innerHTML=calcTotal();
      
      
  });
}

//Delete button
let trash = document.getElementsByClassName("fa-trash-alt");

for (let btnTrash of trash) {
    btnTrash.addEventListener("click", function () {
    btnTrash.parentNode.remove();
    
    let quantity=btnTrash.parentNode.children[5].innerText;
    quantity=parseFloat(quantity);
  
    let pricee=btnTrash.parentNode.children[7].children[0].innerText;
    pricee=parseFloat(pricee);
      
    let subtotal = pricee*quantity;
    btnTrash.parentNode.children[8].children[0].innerText=subtotal;
      
    document.getElementById("total-basket").innerHTML=calcTotal();
    
  });
}

//Basket total
function calcTotal(){
  let tot=document.getElementsByClassName("subtotal");
  let total=0;
  for (let element of tot){
      total+=parseFloat(element.innerText);
  }
  return total;
}



//Heart button
let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {


    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}

   



