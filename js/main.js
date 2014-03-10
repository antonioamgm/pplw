//empieza aqui
var creamail = {
    limita: function(maxCaracter) {
        with (document.formcorreo) {
            if (contenido.value.length > maxCaracter) {
                return false;
            } else {
                return true;
            }
        }

    },
    sendEmail: function() {
        var fmail = "mailto:";
        var sitio = "lauraalvaro.es";
        var mimail = "art";
        var enlaces = {c: "cc=", s: "subject=", i: "?", am: "&", b: "body=", a: "@"};
        var asunto = "Envío de correo desde la página Web de lauraalvaro.es";
        var formemail = document.formcorreo;
        debugger;
        if (this.formCheck()) {
            var link = fmail//mailto
                    + mimail + enlaces.a + sitio//correo completo
                    + enlaces.i + enlaces.s + asunto; //interrogante + asunto
            formemail.action = link;
            //window.location.href = link;
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
            //alert(contenido.value);
            if (usuario.value === "") {
                //alert("El nombre es obligatorio y debe ser texto");
                error = errorUsuario;
                error.innerHTML = "El nombre es obligatorio y debe ser texto";
                usuario.focus();
            }
            else if (correo.value === "") {
                //alert("Por favor tu email quién envia el correo.");
                error = errorCorreo;
                error.innerHTML = "El correo electrónico es obligatorio.";
                correo.focus();
            }
            else if (contenido.value === "" && this.limita(100)) {
                //alert("Rellena el contenido del correo");
                error = errorContenido;
                error.innerHTML = "El contenido del correo es obligatorio.";
                contenido.focus();
            }
            else if (this.checkMultiple() === "") {
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
        var fmail = "mailto:";
        var sitio = "lauraalvaro.es";
        var mimail = "art";
        var enlaces = {c: "cc=", s: "subject=", i: "?", am: "&", b: "body=", a: "@"};
        var asunto = {su: 'Sugerencias', op: 'Opinión', inf: 'Informe de errores', re: 'Recomendar', enro: 'Enlaces rotos', ot: 'Otros'};
        debugger;
        with (document.formcorreo) {
            if (listasunto.selectedIndex === 1)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.su;
//else if (Subject.selectedIndex == 2) action = "mailto:vilber72@hotmail.com?subject=Opinión";
            else if (listasunto.selectedIndex === 2)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.op;
            else if (listasunto.selectedIndex === 3)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.inf;
            else if (listasunto.selectedIndex === 4)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.re;
            else if (listasunto.selectedIndex === 5)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.enro;
            else if (listasunto.selectedIndex === 6)
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.ot;
            else
                action = fmail//mailto
                        + mimail + enlaces.a + sitio//correo completo
                        + enlaces.i + enlaces.s + asunto.ot;
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
    getInfo: function() {
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

