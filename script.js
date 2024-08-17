function changeText() {
    var editableText = document.getElementById("editable-text");
    var newText = prompt("change text:");
    if (newText !== null) {
        editableText.textContent = newText;
    }
}
