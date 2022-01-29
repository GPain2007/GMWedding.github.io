function showScrip() {
  document.getElementById("scrip-container").style.display = "flex";
  document.getElementById("scrip").style.color = "#d6ca7e"
  const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if(width <= 600){
    document.getElementById("scrip-container").style.display = "none";
  }
}

function hideScrip() {
  document.getElementById("scrip-container").style.display = "none";
}
