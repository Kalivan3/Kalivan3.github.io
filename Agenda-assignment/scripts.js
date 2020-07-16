var first = document.getElementById("main-title");
first.style.color = "red";
first.style.fontSize = "2rem";

var sub = document.getElementsByClassName("sub-topic");
for (var i=0; i<sub.length; i++){
    sub[i].style.color = "purple"; 
    sub[i].style.backgroundColor = "orange";
}
var info = document.getElementsByClassName("info");
for (var i=0; i<info.length; i++){
    info[i].style.fontSize = "18px";
    info[i].style.color = "blue";
}

var content = document.getElementsByClassName("content");
for (var i=0; i<content.length; i++){
    content[i].style.color = "blue";
    content[i].style.fontSize = "18px";
}