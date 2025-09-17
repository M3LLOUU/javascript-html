let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        // Replace visual symbols with JavaScript operators
        let expression = displayValue
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        
        // Use Function constructor for safe evaluation
        const result = new Function('return ' + expression)();
        
        // Handle division by zero
        if (!isFinite(result)) {
            throw new Error('Divisão por zero');
        }
        
        displayValue = result.toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('result').value = 'Erro';
        setTimeout(() => {
            document.getElementById('result').value = '';
        }, 1000);
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        event.preventDefault();
        appendToDisplay('/');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    }
});

// Prevent form submission on Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
