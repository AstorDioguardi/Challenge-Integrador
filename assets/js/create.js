const fileInput = document.getElementById("fileInput");
const chooseFileButton = document.getElementById("chooseFileButton");
const noFilesText = document.getElementById("noFilesText");
const imagePreviews = document.getElementById("imagePreviews");

chooseFileButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const files = fileInput.files;

    if (files.length > 0) {
        noFilesText.style.display = "none";
        displayImagePreviews(files);
    } else {
        noFilesText.style.display = "block";
        imagePreviews.innerHTML = "";
    }
});

function displayImagePreviews(files) {
    imagePreviews.innerHTML = "";
    for (const file of files) {
        const imagePreview = document.createElement("div");
        const image = document.createElement("img");
        image.width = 24;
        image.height = 24;
        image.src = URL.createObjectURL(file);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            imagePreviews.removeChild(imagePreview);
            fileInput.value = null; // Reset the input to allow re-uploading the same file
        });

        imagePreview.appendChild(image);
        imagePreview.appendChild(deleteButton);
        imagePreviews.appendChild(imagePreview);
    }
}
