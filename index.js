const passwordBox = document.getElementById("value");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+-!0-=";
const allchars = upperCase + lowerCase + number + symbol;

const alertContainer = document.querySelector(".alert-container")




function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
        }

        password = password.split('').sort(() => Math.random() - 0.5).join('');
        passwordBox.value = password;
    
    }
    async function copyPassword() {
        try {
            await navigator.clipboard.writeText(passwordBox.value);


            alertContainer.innerText = passwordBox.value + " copied!"
            alertContainer.classList.remove("active");
            setTimeout(() => {
                alertContainer.classList.add("active");
            }, 2000)
        } catch (err) {
            alertContainer.innerText = "Failed to copy!"
        }
    }
    {
    }