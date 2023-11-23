const username = document.querySelector("#username");
const message = document.querySelector("#text-message");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".message");
const errorText = document.querySelector(".error-text");
const popup = document.querySelector(".popup");
const textarea = document.querySelector(".textarea");
const copy = document.querySelector('.mb-0')

const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");
  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    }
  });
};

const checkLength = (input, min) => {
  const form = input.previousElementSibling.innerText;
  if (input.value.length < min) {
    showError(input, `${form} musi mieć minimum ${min} znaki`);
  } else {
    clearError(username);
  }
};
const checkSubject = (input, min) => {
  const form = input.previousElementSibling.innerText;
  if (input.value.length < min) {
    showError(input, `${form} musi mieć minimum ${min} znaki`);
  } else {
    clearError(subject);
  }
};

const checkMessage = () => {
  if (message.value < 5) {
    textarea.style.display = "block";
    textarea.textContent = "Wpisz treść wiadomości";
  } else {
    textarea.style.display = "none";
  }
};

const checkMail = (email) => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (reg.test(email.value)) {
    clearError(email);
  } else {
    showError(email, `Adres poczty jest niepoprawny`);
  }
};

const checkErrors = () => {
  const allInput = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInput.forEach((element) => {
    if (element.classList.contains("error") || textarea.style.display === "block") {
      errorCount++;
    } 
  })
  if (errorCount === 0) {
      
    popup.classList.add("show-popup");
    let arr = [username, subject, email, message]
    arr.forEach(el => {
      el.value = ''
    });
  
  setTimeout(() => {
    popup.classList.remove("show-popup");
  }, 2000);
};
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, subject, email]);
  checkLength(username, 3);
  checkMail(email);
  checkSubject(subject, 3);
  checkMessage();
  checkErrors();
});


let date = new Date().getFullYear()
const copyright = '&#169'

const setDate = () => {
  copy.innerHTML = `${copyright} ${date} | Artur Molenda`
}
setDate()