const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

populateForm();

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    
    Object.keys(parsedData).forEach(key => {
      formData[key] = parsedData[key];
      form.elements[key].value = parsedData[key];
    });
  }
}