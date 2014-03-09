//empieza aqui
var creamail = {
    limita: function(maxCaracter) {
        var cuerpo = document.getElementById("contenido");
        if (cuerpo.value.length > maxCaracter) {
            return false;
        } else {
            return true;
        }
    },
    sendEmail: function() {
        var fmail = "mailto:";
        var sitio = "lauraalvaro.es";
        var mimail = "art";
        var enlaces = {c: "cc=", s: "subject=", i: "?", am: "&", b: "body=", a: "@"};
        var asunto = "Envío de correo desde la página Web de lauraalvaro.es";
        debugger;
        if (this.limita(100) && this.formCheck()) {
            var link = fmail//mailto
                    + mimail + enlaces.a + sitio//correo completo
                    + enlaces.i + enlaces.s + asunto; //interrogante + asunto
            window.location.href = link;
            return true;
        } else {
            return false;
        }
    },
    formCheck: function() {
        var passed = false;
        var error = "";
        debugger;
        with (document.formcorreo) {
            if (usuario.value === "") {
                //alert("El nombre es obligatorio y debe ser texto");
                error = document.getElementById("errorUsuario");
                error.innerHTML = "El nombre es obligatorio y debe ser texto";
                usuario.focus();
            }
            else if (correo.value === "") {
                //alert("Por favor tu email quién envia el correo.");
                error = document.getElementById("errorCorreo");
                error.innerHTML = "El correo electrónico es obligatorio.";
                correo.focus();
            }
            else if (contenido.value === "") {
                alert("Rellena el contenido del correo");
                contenido.focus();
            }
            else if (this.checkMultiple === "") {
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
    checkMultiple: function() {
        if (this.getCookie("emailenviado") === 'true')
            return true;
        else
            return false;
    },
    getCookie: function(name) {
        var cname = name + "=";
        var dc = document.cookie;
        if (dc.length > 0) {
            begin = dc.indexOf(cname);
            if (begin !== -1) {
                begin += cname.length;
                end = dc.indexOf(";", begin);
                if (end === -1)
                    end = dc.length;
                return unescape(dc.substring(begin, end));
            }
        }
        return null;
    },
    process: function() {
        setCookie("emailenviado", "true");
        with (document.forcorreo) {
            if (Subject.selectedIndex === 1)
                action = "mailto:vilber72@hotmail.com?subject=Sugerencias";
//else if (Subject.selectedIndex == 2) action = "mailto:vilber72@hotmail.com?subject=Opinión";
            else if (Subject.selectedIndex === 2)
                action = "mailto:" + correo.value + "?subject=Opinión";
            else if (Subject.selectedIndex === 3)
                action = "mailto:vilber72@hotmail.com?subject=Informe errores";
            else if (Subject.selectedIndex === 4)
                action = "mailto:vilber72@hotmail.com?subject=Enviar script/código";
            else if (Subject.selectedIndex === 5)
                action = "mailto:vilber72@hotmail.com?subject=Recomendar";
            else if (Subject.selectedIndex === 6)
                action = "mailto:vilber72@hotmail.com?subject=Enlaces rotos";
            else
                action = "mailto:vilber72@hotmail.com?subject=Otros";
        }
    },
    setCookie: function(name, value, expires) {
        document.cookie = name + "=" + escape(value) +
                ((expires !== null) ? "; expires=" + expires.toGMTString() : "")
                + "; path=/";
    },
    getName: function() {
        if (getCookie("name") !== null) {
            document.formcorreo.usuario.value = getCookie("emailname");
        }
    },
    setName: function() {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 365));
    var prompt = i = document.formcorreo.usuario.value;
    setCookie("name", i, expdate);
},
 getInfo:function() {
    var now = new Date();
    document.formcorreo.info.value += " Navegador: " + navigator.userAgent;
    document.formcorreo.info.value += " ";
    document.formcorreo.info.value += " Fecha de envío: " + now;
}
};
//termina aqui
window.onload = function() {
    creamail.getInfo();
    creamail.getName();
};

