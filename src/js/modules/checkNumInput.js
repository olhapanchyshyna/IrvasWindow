function checkNumInput(inputSelector){
    const numInput = document.querySelectorAll(inputSelector);

    numInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export default checkNumInput;
