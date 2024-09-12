const input1 = parseInt(document.getElementById('input1').value);
const input2 = parseInt(document.getElementById('input2').value);
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const exp = document.getElementById('exp');
const root = document.getElementById('root');
const result = document.getElementById('result');


plus.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = input1 + input2;
    result.innerHTML = resultEl;
});

multiply.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = input1 * input2;
    result.innerHTML = resultEl;
});

divide.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = input1 / input2;
    result.innerHTML = resultEl;
});

minus.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = input1 - input2;
    result.innerHTML = resultEl;
});

exp.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = Math.pow(input1, input2);
    result.innerHTML = resultEl;
});
    
root.addEventListener('click', () => 
{
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const resultEl = Math.pow(input2, 1 / input1);
    result.innerHTML = resultEl;
});