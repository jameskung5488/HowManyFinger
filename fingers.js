document.getElementById("guess").onclick = function(){

var numberOfFingers = Math.random();

numberOfFingers = numberOfFingers * 6 ;

numberOfFingers = Math.floor(numberOfFingers);

if (document.getElementById("input-box").value == numberOfFingers)
{
document.getElementById("yes").style.display = 'block';
document.getElementById("no").style.display = 'none';
document.getElementById("img-placeholder").style.visibility = 'hidden';
}
else
{
document.getElementById("no").style.display = 'block';
document.getElementById("yes").style.display = 'none';
document.getElementById("img-placeholder").style.visibility = 'hidden';
}


if (numberOfFingers == 0) {
document.getElementById("no-fingers").style.visibility="visible";
}
else {
document.getElementById("no-fingers").style.visibility="hidden";
}
if (numberOfFingers == 1) {
document.getElementById("one-finger").style.visibility="visible";
}
else {
document.getElementById("one-finger").style.visibility="hidden";
}
if (numberOfFingers == 2) {
document.getElementById("two-fingers").style.visibility="visible";
}
else {
document.getElementById("two-fingers").style.visibility="hidden";
}
if (numberOfFingers == 3) {
document.getElementById("three-fingers").style.visibility="visible";
}
else {
document.getElementById("three-fingers").style.visibility="hidden";
}
if (numberOfFingers == 4) {
document.getElementById("four-fingers").style.visibility="visible";
}
else {
document.getElementById("four-fingers").style.visibility="hidden";
}
if (numberOfFingers == 5) {
document.getElementById("five-fingers").style.visibility="visible";
}
else {
document.getElementById("five-fingers").style.visibility="hidden";
}

}
/*
if (isNaN() == true)
{
alert("Oops! please use only numbers")
}

}
*/
