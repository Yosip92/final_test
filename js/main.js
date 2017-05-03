console.log('HELO JS');

var page = location.hash;
console.log('page',page);
function Style(page){
  if (page == "#home"){
    document.getElementById("home2").style = "background: black;"
  }
  else if (page == "#blog"){
    document.getElementById("blog2").style = "background: black;"
  }
}
