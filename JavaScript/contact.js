
function match() {
  var str = document.getElementById("mare").innerHTML; 
  var res = str.match(/ain/gi);
  document.getElementById("mare").innerHTML = res;

}
function replace() {
  var str = document.getElementById("mare").innerHTML; 
  var res = str.replace("SPAIN", "LONDON");
   document.getElementById("mare").innerHTML = res;
}
function exec() {
  var str = document.getElementById("mare").innerHTML; 
   var patt = new RegExp("e");
  var res = patt.exec(str);
  document.getElementById("mare").innerHTML = res;
}
function test() {
  var str = document.getElementById("mare").innerHTML; 
  var patt = new RegExp("z");
  var res = patt.test(str);
  document.getElementById("mare").innerHTML = res;
}

  function manipulim() {
  document.getElementById("maxvalue").innerHTML = Number.MAX_VALUE;
    document.getElementById("NaN").innerHTML = Number.NaN;
    var num = 5.56789;
  var n = num.toExponential();
  document.getElementById("expo").innerHTML = n;
  var c = num.toString();
  document.getElementById("string").innerHTML = n;

}
  $(document).ready(function(){
  $("#remove").click(function(){
    $("#append").remove();
  });
});
$(document).ready(function(){
  $("#add").click(function(){
    $("#append").append(" <b>Appended text</b>.");
  });



});
  $(document).ready(function(){
  $("#set").click(function(){
    $("#fb").attr("href", "https://www.facebook.com/albin.qerimi.9");
  });
});
  $(document).ready(function(){
  $("#get").click(function(){
    alert($("#fb").attr("href"));
  });
});
  $(document).ready(function(){
  $("#hide").click(function(){
    $("h6").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});



var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}



var person = {
  firstName: "Albin",
  lastName : "Qerimi",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};





function errors() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("error").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

const PI = 3.141592653589793;

