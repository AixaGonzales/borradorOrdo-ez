
const emailInput = document.querySelector('#gmail');
const messageInput = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
  } else {
    console.log('completar todos los campos!');
  }
  // si es correcto
  alert('Formulario enviado con éxito.');
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}