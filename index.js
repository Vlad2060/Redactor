const fontSizePicker = document.getElementById('font-size-picker')
const fontColorPicker = document.getElementById('font-color-picker')
const text = document.getElementById('text')
const editorImage = document.querySelector('#editor img')

fontSizePicker.addEventListener('input', function() {
    if (fontSizePicker.value > 10) {
        fontSizePicker.value = 10
    }
    let fontSize = fontSizePicker.value
    text.style.fontSize = fontSize + 'vh'
});

fontColorPicker.addEventListener('input', function() {
    let fontColor = fontColorPicker.value
    text.style.color = fontColor
});

function openFilePicker() {
    let fileInput = document.getElementById('fileInput')
    fileInput.click()
    fileInput.addEventListener('change', handleFileSelect)
}

function handleFileSelect(event) {
    let selectedFile = event.target.files[0]

    if (selectedFile && selectedFile.type.startsWith('image/')) {
        let imageURL = URL.createObjectURL(selectedFile)
        editorImage.src = imageURL
    }
}

function saveImage() {
    let editor = document.getElementById('editor')
    html2canvas(editor).then(function(canvas) {
        let imgData = canvas.toDataURL('image/png')
        
        // Створіть новий елемент <a> для завантаження
        let downloadLink = document.createElement('a')
        downloadLink.href = imgData
        downloadLink.download = 'editor_image.png'
        downloadLink.click()
    })
}

function remove() {
    fontSizePicker.value = null
    fontColorPicker.value = null
    text.style.fontSize = '3vh'
    text.style.color = 'black'
    editorImage.src = ''
}