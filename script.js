
function toReveal(ind) {
      
    var x = document.getElementById("faq-container");
    var y = x.getElementsByClassName("faq-paragraph");

    if (x.getElementsByTagName("p")[ind].style.display == "block") {
      
      x.getElementsByTagName("p")[ind].style.display = "none";
      x.getElementsByTagName("img")[ind].style.transform = "scaleY(1)";
      x.getElementsByTagName("h3")[ind].style.fontWeight = "400";

    } else {

      x.getElementsByTagName("p")[ind].style.display = "block";
      x.getElementsByTagName("h3")[ind].style.fontWeight = "700";
      x.getElementsByTagName("img")[ind].style.transform = "scaleY(-1)";
      
    }

    for (let i = 0; i < y.length; i++) {

      if (i != ind) {
        
        y[i].style.display = "none";
        x.getElementsByTagName("h3")[i].style.fontWeight = "400";
        x.getElementsByTagName("img")[i].style.transform = "scaleY(1)";

      } 

    }
    
}