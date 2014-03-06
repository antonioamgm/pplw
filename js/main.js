function sendMail(asunto,cuerpo) {
var link = "mailto:art@lauraalvaro.es"
         + "?cc="
         + "&subject="+asunto
         + "&body="+cuerpo
;
window.location.href = link;
}