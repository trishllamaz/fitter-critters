const input = document.getElementById('file-input');
const preview = document.getElementById('preview');

input.addEventListener("change", () => {
	const reader = new FileReader();
	reader.onload = () => {
		preview.src = reader.result;
	};
	reader.readAsDataURL(input.files[0]);
});

/* Here Is Script For The Login Page */

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

