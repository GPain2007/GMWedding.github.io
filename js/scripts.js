function showScrip(language) {
  
  
  const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if(language ===  "spanish"){
    document.getElementById("scrip-container-spanish").style.display = "flex";
    document.getElementById("scrip-spanish").style.color = "#d6ca7e";
    document.getElementByClassName("link-text-spanish").style.display = "flex";
    document.getElementByClassName('links-spanish').style.color = "#d6ca7e";
   
    
  }else {

    document.getElementById("scrip-container").style.display = "flex";
    document.getElementById("scrip").style.color = "#d6ca7e";
    document.getElementById("wedding-invite").src = "images/english_invite.png";
    document.getElementByClassName("link-text").style.display = "flex";
    document.getElementByClassName('links').style.color = "#d6ca7e";
   
    
  }
  if(width <= 600){
    document.getElementById("scrip-container").style.display = "none";
    document.getElementById("scrip-container-spanish").style.display = "none";
  }
}

function hideScrip() {
  document.getElementById("scrip-container").style.display = "none";
  document.getElementById("scrip-container-spanish").style.display = "none";
}

// Things in this function change when the button for language is clicked
function changeDefaultLanguage() {
  var name = document.getElementById("button-language").innerHTML;
  
  if(name === "Spanish") {
    document.getElementById("button-language").innerText = "Ingles";
    document.getElementById("scrip").style.display = "none";
    document.getElementById("scrip-spanish").style.display = "block";
    document.getElementById("wedding-invite").src = "images/3.jpeg";
    document.getElementById("main-container-spanish").style.visibility = "visible";
    document.getElementById("main-container").style.visibility = "hidden";
    document.getElementById("main-container").style.display = "none";
    document.getElementById("main-container-spanish").style.display = "block";
    
  }else{
    document.getElementById("button-language").innerText = "Spanish";
    document.getElementById("scrip-spanish").style.display = "none";
    document.getElementById("scrip").style.display = "block";
    document.getElementById("wedding-invite").src = "images/english_invite.png";
    document.getElementById("main-container-spanish").style.visibility = "hidden";
    document.getElementById("main-container").style.visibility = "visible";
    document.getElementById("main-container").style.display = "block";
    document.getElementById("main-container-spanish").style.display = "none";
    
  }
  
}


