var sel = document.getElementById('selcategory');


function validar() {
    var site, parrafo, valor;
    site = document.getElementById("selsite").value;

    valor = true;
    msgError = "";


    // SI CADA ATRIBUTO ES IGUAL A CAMPO VACÏO SE VUELVE AUTOMATICAMENTE EN CAMPO OBLIGATORIO
    // Retorna false para que se quede ahí y no muestre errores
    if (site) {
        msgError += "<br>* Pais  "
        valor = false;
        console.log("{}");
    }

    /* Mensaje de alerta que informa cuales campos estan malos */
    parrafo = document.getElementById("parrafo").innerHTML = "Por favor revisar los siguientes campos:" + msgError;
    return valor;

}


function setCategory (idSitio) {

    child = sel.lastChild;
    while(child){
        sel.removeChild(child)
        child = sel.lastChild;
    }

    var request = new XMLHttpRequest();
    request.open('GET', `https://api.mercadolibre.com/sites/${idSitio}/categories`, true);

    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach( categoria => {


                var option = document.createElement('option');
                option.appendChild(document.createTextNode(categoria.name));
                option.value = categoria.id;
                sel.appendChild(option);





            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "No funciona!";
            app.appendChild(errorMessage);
        }
    }
    request.send();
}
