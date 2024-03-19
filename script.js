const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const validationMessage = document.getElementById('validation-message');
const clearBtn = document.getElementById('clear-btn');

function encryptText() {
    const text = inputText.value.toLowerCase();
    if (/^[a-z\s]+$/.test(text)) {
        validationMessage.style.display = 'none';
        const encryptedText = text.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        outputText.textContent = encryptedText;
    } else {
        validationMessage.style.display = 'block';
        outputText.textContent = '';
    }
}

function decryptText() {
    const text = inputText.value.toLowerCase();
    if (/^[a-z\s]+$/.test(text)) {
        validationMessage.style.display = 'none';
        const decryptedText = text.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        outputText.textContent = decryptedText;
    } else {
        validationMessage.style.display = 'block';
        outputText.textContent = '';
    }
}

function copyText() {
    const text = outputText.textContent;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch((err) => alert('Error al copiar el texto', err));
    }
}

function clearText() {
    inputText.value = '';
    outputText.textContent = '';
    validationMessage.style.display = 'none';
}

encryptBtn.addEventListener('click', encryptText);
decryptBtn.addEventListener('click', decryptText);
copyBtn.addEventListener('click', copyText);
clearBtn.addEventListener('click', clearText);