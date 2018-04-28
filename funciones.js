alert("un mensaje de prueba 1 ");
var m= "global";
function muestraMensaje(){
	m= "local";
	alert(m);
}
alert(m);
muestraMensaje();
alert(m);