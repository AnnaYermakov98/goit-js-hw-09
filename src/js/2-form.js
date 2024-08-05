
const formData = { 
    email: '', 
    message: ''
};

const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const userInfoFromLS = JSON.parse(localStorage.getItem(storageKey));
if (userInfoFromLS) {
    const { email, message } = userInfoFromLS;
    formData.email = email;
    formData.message = message;
    form.email.value = email;
    form.message.value = message;
}

form.addEventListener('input', (evt) => {
    const { name, value } = evt.target;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(storageKey);
    formData.email = "";
    formData.message = "";
    form.email.value = "";
    form.message.value = "";
});



