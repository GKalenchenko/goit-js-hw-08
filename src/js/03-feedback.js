import throttle from 'lodash.throttle';

const emailRef = document.querySelector("[name = 'email']");
const messageRef = document.querySelector("[name ='message']");
const formRef = document.querySelector('.feedback-form');
const formValue = {};

formRef.addEventListener('input', throttle(callback, 500));
formRef.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  formRef.clear;
  console.log(formValue);
  e.currentTarget.reset();
});

function callback(event) {
  event.preventDefault();
  formValue.email = emailRef.value;
  formValue.message = messageRef.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}
if (localStorage.getItem('feedback-form-state')) {
  const localValues = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailRef.value = localValues.email;
  messageRef.value = localValues.message;
}
