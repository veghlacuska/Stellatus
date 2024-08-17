function changeText() {
    var editableText = document.getElementById("editable-text");
    var newText = prompt("Enter new text:");
    if (newText !== null) {
        editableText.textContent = newText;
    }
}
