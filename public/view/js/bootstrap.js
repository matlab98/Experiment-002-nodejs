var Aa = document.getElementById("calendar");
var Bb = document.getElementById("cron");
var Cc = document.getElementById("message");
var Dd = document.getElementById("task");
var Ee = document.getElementById("profile");

if (Aa.addEventListener) {
Aa.addEventListener('click', barra);
}
if (Bb.addEventListener) {
Bb.addEventListener('click', barra);
}
if (Cc.addEventListener) {
Cc.addEventListener('click', barra);
}
if (Dd.addEventListener) {
Dd.addEventListener('click', barra);
}
if (Ee.addEventListener) {
Ee.addEventListener('click', barra);
}

function barra(){
  document.getElementById('sideb').style.display = 'block';
  var panelDerecha = document.getElementById("sideb");
  var result = (-76)+panelDerecha.clientWidth;
  document.getElementById("float-bar").style.right = result;
  var menu = document.getElementById("calendar");
  var desplazar = 250 + menu.clientWidth+panelDerecha.clientWidth;
  document.getElementById("mainCalendar").style.right = desplazar;
}
