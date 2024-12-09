function showAlert(){ alert('Hola MMR'); }

const miBoton = document.getElementById('miBoton');

function handleClick(){
    alert('hola de nuevo');
}

miBoton.addEventListener('click', handleClick);

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if(!validateEmail(email)){
        alert('Por favor ingrese un correo electronico valido');
    } else{
        alert('Correo electronico enviado correctamente');
    }
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(){
    document.querySelector(".nav-links").
        classList.toggle("nav-links-responsive")})