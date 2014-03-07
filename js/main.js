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

window.onload=function(){
	document.getElementById('usuario').focus();
	document.getElementById('contenido').onclick=sendMail;
};
