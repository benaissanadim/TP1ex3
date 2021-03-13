///*
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}//*/
function newElement() {
    var li = document.createElement("li");
    var inputDateValue = document.getElementById("myDateInput").value;
    var inputTaskValue = document.getElementById("myTaskInput").value;
    var inputValue = inputDateValue+" : "+ inputTaskValue;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if ((inputDateValue === '') ||(inputTaskValue === '')) {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myDateInput").value = "";
    document.getElementById("myTaskInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    //li.appendChild ('<i class="fa fa-trash" aria-hidden="true"></i>');
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
var Dateinput = document.getElementById("myDateInput");
var Taskinput = document.getElementById("myTaskInput");
Dateinput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
Taskinput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });