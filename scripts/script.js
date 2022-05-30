const name = document.getElementById("nombre-apellido")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const consulta = document.getElementById("consulta")
const mensaje_form = document.getElementById("mensaje_error")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault();
    validarForm();
    
});

function validarForm(){
    let emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let mensaje_error = ""
    let revisar = false

    if(name.value.length<4){
        mensaje_error += "Ingrese un nombre valido  <br>"
       revisar = true
}
        
    if(!emailval.test(email.value)){
        mensaje_error += "Ingrese un mail valido <br>"
        revisar = true
    }

    if(telefono.value.length<8){
        mensaje_error += "Ingrese un telefono valido  <br>"
        revisar = true
    }
    if(consulta.value ==""){
        mensaje_error += "Ingrese una consulta  <br>"
        revisar = true
    }
    if(revisar){
        mensaje_form.innerHTML = mensaje_error
    }
    else{
        document.getElementById("mensaje_error").style.color="green"
        mensaje_form.innerHTML = "Mensaje enviado exitosamente"
       
    }
}