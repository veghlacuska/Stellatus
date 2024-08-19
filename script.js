document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

function changeText() {
    document.getElementById('editable-text').innerText = 'This is the new text after clicking the button!';
}
