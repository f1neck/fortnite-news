//let name = prompt("Ваше имя?", "");
//alert(name);
function hidetext(){
    document.getElementById("hide").style.display="none"
    document.getElementById("show").style.display="flex"
    document.getElementById("footer").style.height="50px"
}
function showtext(){
    document.getElementById("show").style.display="none"
    document.getElementById("hide").style.display="flex"
    document.getElementById("footer").style.height="1050px"
}
function nav(){
    let menu=document.getElementById("nav")
    if( menu.style.maxHeight=="0px"){
        menu.style.maxHeight="1000px" 
    }
    else{
        menu.style.maxHeight="0"
    }
}