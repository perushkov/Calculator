let current = 0;
let operation = null;
let dotted = false;
const actions = {
  '+/-': ' - ',
  '%': ' % ',
  '/': ' / ',
  '*': ' * ',
  '−': ' - ',
  '+': ' + ',
};

const onClick = action => {
    console.debug(action);
    const output = document.getElementById("output");
    const number = parseInt(action);
    if (isNaN(number)) {
        if (action === 'C') {
            output.innerText = 0;
            dotted = false;
        } else if (action === '=') {
            if (output.innerText === '0' && operation === '/') {
                output.innerText = 'ERROR';
                dotted = false;
                return;
            }
            output.innerText = eval(current + actions[operation] + output.innerText);
            dotted = false;
        } else if (action === '.' && !dotted) {
            updateNumer(action);
            dotted = true;
        } else {
            operation = action;
            current = parseFloat(output.innerText);
            dotted = false;
        }
    } else {
        updateNumer(number);
    }
}

const updateNumer = input => {
    if (output.innerText.length == 12) {
            return;
    }
    if (output.innerText === '0' ||  (current != 0)) {
        output.innerText = input;
    } else {
            output.innerText += input;
    }
}
