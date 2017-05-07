// console.log('HELO JS');


function myClick(url) {
<<<<<<< HEAD
//   console.log("url", url);
//     var newUrl = location.host + location.pathname;
//   console.log("newUrl", newUrl);
// var newUrl = location.host + location.pathname;
// console.log("newUrl", newUrl);
// var response = document.getElementById("menu").innerHTML;
// window.history.pushState(null, null, newUrl);

     $(".menuItem").css("background","#87509c");
    switch (url) {
      case "/home1": {
        $(".home1").css("background","#643a79");
        location = location.pathname + "/home";
        break;
      }
      case "/blog1": {
        $(".blog1").css("background","#643a79");
        break;
      }
      case "/work1": {
        $(".work1").css("background","#643a79");
        break;
      }
      case "/about1": {
        $(".about1").css("background","#643a79");
        break;
      }
      case "/contact1": {
=======
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
>>>>>>> origin/master
        $(".contact1").css("background","#643a79");
        break;
      }
    }
<<<<<<< HEAD
}

el = document.getElementById("menu");
el.addEventListener("click", function(url){myClick}, false);

// window.addEventListener(hashchange)
function change(){
  var url = location.hash;
  replace(url[0])
=======
>>>>>>> origin/master
}

el = document.getElementById("menu");
el.addEventListener("click", function(url){myClick}, false);
