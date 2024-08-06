document.getElementById('add-photo-btn').addEventListener('click', function() {
    var photoUrl = document.getElementById('photo-url').value.trim();
    if (photoUrl) {
        addPhotoToGallery(photoUrl);
        document.getElementById('photo-url').value = ''; 
    } else {
        alert('Por favor, insira uma URL válida.');
    }
});

document.getElementById('upload-photo-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('photo-file');
    var files = fileInput.files;
    if (files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            addPhotoToGallery(e.target.result);
        };
        reader.readAsDataURL(files[0]);
        fileInput.value = ''; 
    } else {
        alert('Por favor, selecione um arquivo.');
    }
});

function addPhotoToGallery(url) {
    var photoGallery = document.getElementById('photo-gallery');
    var listItem = document.createElement('div');
    listItem.className = 'photo-item';

    var img = document.createElement('img');
    img.src = url;
    img.onerror = function() {
        alert('Não foi possível carregar a imagem. Verifique a URL e tente novamente.');
        listItem.remove();
    };

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function() {
        photoGallery.removeChild(listItem);
    };

    listItem.appendChild(img);
    listItem.appendChild(deleteBtn);
    photoGallery.appendChild(listItem);
}
