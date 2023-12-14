const inputFile = document.querySelector('input[type="file"]');
const imgPreview = document.getElementById('img-input');


const actualizarPrevisualizacion = async () => {
    if (inputFile.files && inputFile.files[0]) {
       const reader = new FileReader();
       reader.onload = (e) => {
         imgPreview.src = e.target.result;
         imgPreview.style.display = 'block';
       };
       reader.readAsDataURL(inputFile.files[0]);
    } else {
       imgPreview.src = '';
       imgPreview.style.display = 'none';
    }
}
   
inputFile.addEventListener('change', actualizarPrevisualizacion, false);