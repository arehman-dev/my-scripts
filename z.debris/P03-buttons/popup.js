document.querySelectorAll('.alertButton').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.getAttribute('data-message'));
    });
});
