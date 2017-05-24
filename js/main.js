// console.log('HELO JS');


function myClick(url) {
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
        $(".contact1").css("background","#643a79");
        break;
      }
    }
}

el = document.getElementById("menu");
// el.addEventListener("click", function(url){myClick}, false);

// window.addEventListener(hashchange)
// function change(){
//   var url = location.hash;
//   replace(url[0])
//console.log($('.btn'));
// function val()
// {
//   console.log($('input')[1].value);
// }
// function res()
// {
//   document.getElementsByTagName('form')[0].reset();
// }
function val3(){
  var x = $('input[name=name1]').val(),
  y = $('input[name=name2]').val(),
  z = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/,
  is_value = z.test(x);
  // console.log(x + y);
  if (is_value){
    $('#result').html("input " + x);
  }
  else {
    $('#result').html("ERRORRRRRRR!!!!!!!");
  }
}

// function val4(){
//   var z = $('select').val();
//   var strUser = e.options[e.selectedIndex].val();
//   // $('#result').html('. Selected' + z);
// }
function check() {
  var checkedVal1 = $('[name=option1]:checked').val();
  var checkedVal2 = $('[name=option2]:checked').val();
  var checkedVal3 = $('[name=option3]:checked').val();
  var checkedVal4 = $('[name=option4]:checked').val();
  var checkedVal5 = $('[name=option5]:checked').val();
  if (checkedVal2 != undefined) {
    $('#res2').html('checked ' + checkedVal1 + checkedVal2 + checkedVal3 + checkedVal4 + checkedVal5);
  }
  else if (checkedVal2 == undefined) {
    $('#res2').html('');
  }
}

function val4() {
  var invis = $('#cars123').val();
  console.log(invis);
  if (invis == "audi") {
    $('[name=name2]').hide();
  }
  else {
    $('[name=name2]').show();
  }
}

//document.write(document.getElementsByTagName('form')[0].action + '<br />');
//document.write(document.getElementsByTagName('form')[0].method);

document.cookie = "dmitro=name";
console.log("cookies = " + document.cookie);


// localStorage.setItem('myCat', 'Tom');
console.log('local Storage =', localStorage.myCat);
sessionStorage.setItem('myDog', 'Tuzik');
console.log('my dog is', sessionStorage.myDog);
