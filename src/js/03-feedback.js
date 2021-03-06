import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formData = {};

populateFormEl();

formRef.addEventListener('submit', onFormSub);
formRef.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  formData[event.target.name] = event.target.value;
  if (formData !== "") { localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)) };
}

function onFormSub(event) {
  event.preventDefault();
  const formElements = event.currentTarget;
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (email === '' || message === '') {
    alert('fill in all fields');
  }
  const formInputData = {
    email, message
  }

  event.currentTarget.reset();
  
  localStorage.removeItem(STORAGE_KEY);
  console.log(formInputData)
}

function populateFormEl() {
  const savedInfo = localStorage.getItem(STORAGE_KEY);
  const parsedSavedInfo = JSON.parse(savedInfo);
  if (parsedSavedInfo) {
    inputRef.value = parsedSavedInfo.email ? parsedSavedInfo.email : '' ;
    textareaRef.value = parsedSavedInfo.message ?  parsedSavedInfo.message : '' ;
  }
}
