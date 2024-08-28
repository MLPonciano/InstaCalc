// © Calculator App By Matthew Lebron Ponciano 2024
document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === '=') {
                try {
                    const expression = inputBox.value.replace('÷', '/').replace('×', '*').replace(/\^/g, '**');
                    inputBox.value = eval(expression);
                } catch(error) {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += value;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        inputBox.value = '';
    });
});
