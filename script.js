const input = document.getElementById('file-input');
const preview = document.getElementById('preview');

input.addEventListener("change", () => {
	const reader = new FileReader();
	reader.onload = () => {
		preview.src = reader.result;
	};
	reader.readAsDataURL(input.files[0]);
});
