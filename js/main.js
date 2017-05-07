// console.log('HELO JS');


function myClick(url) {
  console.log("url", url);
    var newUrl = location.host + location.pathname;
  console.log("newUrl", newUrl);

     $(".menuItem").css("background","#87509c");
    switch (url) {
      case "#home1": {
        $(".home1").css("background","#643a79");
        break;
      }
      case "#blog1": {
        $(".blog1").css("background","#643a79");
        break;
      }
      case "#work1": {
        $(".work1").css("background","#643a79");
        break;
      }
      case "#about1": {
        $(".about1").css("background","#643a79");
        break;
      }
      case "#contact1": {
        $(".contact1").css("background","#643a79");
        break;
      }
    }
}

el = document.getElementById("menu");
el.addEventListener("click", function(url){myClick}, false);
