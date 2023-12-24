const menu = document.querySelector ("#menu" )
const openButton = document.querySelector ("#open" )
const closeButton = document.querySelector ("#close" )
openButton.addEventListener ("click", function (){
 menu.style.display = "flex";
 openButton.style.display = "none";
 closeButton.style.display = "flex";
})
closeButton.addEventListener ("click", function (){
 menu.style.display = "none";
 openButton.style.display = "block";
 closeButton.style.display = "none";
})

