function sendMail() {
	var asunto="Envío de correo desde la página Web lauraalvaro.es";
	var cuerpo = document.getElementById('contenido');
	var usuario=document.getElementById('usuario');
	var correo=document.getElementById('correo');
	if(limita(100)){	
	var link = "mailto:art@lauraalvaro.es" 
	+ "?cc=" 
	+ "&subject=" + asunto.value 
	+ "&body=" + cuerpo.value;
	window.location.href = link;
	}
}

function limita(maximoCaracteres){
	var elemento=document.getElementById('contenido');
	if(elemento.value.length>maximoCaracteres){
		return false;
	}else{
		return true;
	}
}



//empieza aqui
function getCookie(name){
var cname = name + "=";               
var dc = document.cookie;             
if (dc.length > 0) {              
begin = dc.indexOf(cname);       
if (begin != -1) {           
begin += cname.length;       
end = dc.indexOf(";", begin);
if (end == -1) end = dc.length;
return unescape(dc.substring(begin, end));
   } 
}
return null;
}
function setCookie(name, value, expires) {
document.cookie = name + "=" + escape(value) + 
((expires != null) ? "; expires=" + expires.toGMTString() : "")
+ "; path=/";
}

function setName() {
var expdate = new Date ();
expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000 * 365));
var prompt=i = document.Mail.name.value;
setCookie("name", i, expdate);
}

function getName() {
if(getCookie("name") != null) {
document.Mail.Name.value = getCookie("emailname");
   }
}
function getInfo() {
var now= new Date();
document.Mail.Info.value += " Navegador: " + navigator.userAgent;
document.Mail.Info.value += " ";
document.Mail.Info.value += " Fecha de envío: " + now;
}
function checkMultiple() {
if (getCookie("emailsent") == 'true') return true;
else return false;
}

function process() {
setCookie("emailsent", "true");
with (document.Mail) {
if (Subject.selectedIndex == 1) action = "mailto:vilber72@hotmail.com?subject=Sugerencias";
//else if (Subject.selectedIndex == 2) action = "mailto:vilber72@hotmail.com?subject=Opinión";
else if (Subject.selectedIndex == 2) action = "mailto:"+correo.value+"?subject=Opinión";
else if (Subject.selectedIndex == 3) action = "mailto:vilber72@hotmail.com?subject=Informe errores";
else if (Subject.selectedIndex == 4) action = "mailto:vilber72@hotmail.com?subject=Enviar script/código";
else if (Subject.selectedIndex == 5) action = "mailto:vilber72@hotmail.com?subject=Recomendar";
else if (Subject.selectedIndex == 6) action = "mailto:vilber72@hotmail.com?subject=Enlaces rotos";
else action = "mailto:vilber72@hotmail.com?subject=Otros";
   }
}



function formCheck() {
var passed = false;

with (document.formcorreo) {
if (Subject.selectedIndex == 0) { 
alert("Por favor selecciona asunto.");
Subject.focus();
}
else if (usuario.value == "") {
alert("Por favor incluye tu nombre.");
Name.focus();
}
else if (correo.value == "") {
alert("Por favor incluye el email a quien va dirigido el correo.");
correo.value="art@lauraalvaro.es";
correo.focus();
}
else if (checkMultiple == "") {
if (confirm("Acabas de mandar un email utilizando este formulario, ¿estás seguro de que quieres mandar otro?")) {
process();
passed = true;
   }
   
}
else {
process();
passed = true;
   }
}
return passed;
}

//termina aqui
window.onload=function(){
	document.getElementById('usuario').focus();
	//document.getElementById('contenido').disable=true;
	
	//document.getElementById('contenido').onclick=sendMail;
};

