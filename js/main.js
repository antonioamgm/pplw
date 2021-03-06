//empieza aqui
var creamail = {
    //limita el número de caracteres del textarea
    limita: function(maxCaracter) {
        if (document.formcorreo.contenido.value.length > maxCaracter) {
            return 0;
        } else {
            return 1;
        }
    },
    //comprueba que el formulario tiene los campos rellenos
    formCheck: function() {
        var passed = false;
        //var error = "";
        var enviado = this.getCookie("emailenviado");
//        debugger;
        with (document.formcorreo) {
            //alert(contenido.value);
            if (usuario.value === "") {
                //alert("El nombre es obligatorio y debe ser texto");
                // error = errorUsuario;
                //error.innerHTML = "El nombre es obligatorio y debe ser texto";
                usuario.focus();
            }
            else if (correo.value === "") {
                //alert("Por favor tu email quién envia el correo.");
                // error = errorCorreo;
                //error.innerHTML = "El correo electrónico es obligatorio.";
                correo.focus();
            }
            else if (contenido.value === "" && this.limita(100) === 1) {
                //alert("Rellena el contenido del correo");
                // error = errorContenido;
                // error.innerHTML = "El contenido del correo es obligatorio.";
                contenido.focus();
            }
            else if (enviado === "1") {
                if (confirm("Acabas de mandar un email utilizando este formulario, ¿estás seguro de que quieres mandar otro?")) {
                    this.process();
                    passed = true;
                }
            }
            else {
                this.process();
                passed = true;
            }
        }
        return passed;
    },
    //comprueba si se ha enviado un email
    checkMultiple: function() {
        var vCookie = this.getCookie("emailenviado");
        if (vCookie === "1")
            return 1;
        else
            return 0;
    },
    process: function() {
//         debugger;
        this.setCookie("emailenviado", 1);
        var fmail = "mailto:";
        var sitio = "lauraalvaro.es";
        var mimail = "art";
        var enlaces = {c: "cc=", s: "subject=", i: "?", am: "&", b: "body=", a: "@"};
        var asunto = {su: 'Sugerencias', op: 'Opinión', inf: 'Informe de errores', re: 'Recomendar', enro: 'Enlaces rotos', ot: 'Otros'};
        with (document.formcorreo) {
            this.setCookie("correo", correo.value);
            this.setCookie("usuario", usuario.value);
            if (listasunto.value === asunto.su) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.su;
//else if (Subject.selectedIndex == 2) action = "mailto:vilber72@hotmail.com?subject=Opinión";
            } else if (listasunto.value === asunto.op) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.op;
            } else if (listasunto.value === asunto.inf) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.inf;
            } else if (listasunto.value === asunto.re) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.re;
            } else if (listasunto.value === asunto.enro) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.enro;
            } else if (listasunto.value === asunto.ot) {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.ot;
            } else {
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.ot;
            }
        }
        document.getElementById('cierraform').click();
    },
    setCookie: function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++)
        {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0)
                return c.substring(name.length, c.length);
        }
        return "";
    },
    checkCookie: function(nomCookie) {
        var user = this.getCookie(nomCookie);
        if (user !== "") {
            alert("Bienvenido de nuevo " + user);
        } else {
            user = prompt("Por favor entra tu nombre:", "");
            if (user !== "" && user !== null) {
                setCookie(nomCookie, user, 365);
            }
        }
    },
    getName: function() {
        if (this.getCookie("correo") !== null) {
            with (document.formcorreo) {
                correo.value = this.getCookie("correo");
                usuario.value = this.getCookie("usuario");
            }

        }
    },
    setName: function(nombre) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 365));
        var prompt = i = document.formcorreo.usuario.value;
        this.setCookie(nombre, i, expdate);
    },
    getInfo: function() {
        var now = new Date();
        document.formcorreo.infoNavegador.value += "Navegador: " + navigator.userAgent;
        document.formcorreo.infoFecha.value += "Fecha de envío: " + now;
    }
};
//termina aqui
function CambiaEstilo() {
    debugger;
    var elemento=document.getElementById('navFija');
    if (elemento.style.top > '0px') {
        elemento.className = 'fix-height';
    } else {
        elemento.className = 'fixed';
    }
}
window.onload = function() {
    creamail.getInfo();
    creamail.getName();
};
//crea la barra de herramientas del idioma
/*function googleTranslateElementInit() {
 new google.translate.TranslateElement(
 {
 pageLanguage: 'es',
 layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
 multilanguagePage: true, gaTrack: true,
 gaId: 'UA-48181443-1'},
 'google_translate_element');
 }*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
            {
                pageLanguage: 'es',
                multilanguagePage: true,
                gaTrack: true,
                gaId: 'UA-48181443-1'},
    'google_translate_element');
}


function onclickIdioma() {
    document.getElementById(':0.targetLanguage').onchange=CambiaEstilo;
}
