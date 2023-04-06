import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const boton = document.querySelector('button')

// Obtener los datos del almacenamiento local y convertirlos en un objeto
const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formData) {
  input.value = formData.email;
  textArea.value = formData.message;
}

// evento input para actualizar el data storage
input.addEventListener('input', throttle(handleFormInput, 500));
textArea.addEventListener('input', throttle(handleFormInput, 500));

function handleFormInput(event) {
  const email = input.value;
  const message = textArea.value;
  const formData = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


//enviar el formulario
//1. borrar campos y data storage
boton.addEventListener(
  'click',
  throttle(() => {
    const email = '';
    const message = '';
    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);