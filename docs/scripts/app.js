import { PasswordGenerator } from './passutils.js';

let buttonPass = document.getElementById('button_pass');
const passGen = new PasswordGenerator();

window.onload = function(){
  document.getElementById('button_pass').click();
  return;
}

buttonPass.addEventListener('click', () => {

  const lenPass = document.getElementById('len_pass');
  const numCheckbox = document.getElementById('num_checkbox');
  const punctCheckbox = document.getElementById('punct_checkbox');
  const letUppCheckbox = document.getElementById('let_upp_checkbox');

  const result = passGen.generate(lenPass.value, numCheckbox.checked, punctCheckbox.checked, letUppCheckbox.checked);
  
  if (result.ok) {
    const blockResult = document.getElementById('block_result');
    blockResult.innerHTML = result.password;
    navigator.clipboard.writeText(result.password);
    return;
  }
  
  alert(result.errMsg);
});

