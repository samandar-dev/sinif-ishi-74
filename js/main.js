const elInput1 = document.querySelector('.input1');
const elInput2 = document.querySelector('.input2');
const elInput3 = document.querySelector('.input3');
const elRenge1 = document.querySelector('.ran1');
const elRenge2 = document.querySelector('.ran2');
const elRenge3 = document.querySelector('.ran3');

elInput1.addEventListener('keyup', funRange);
elInput2.addEventListener('keyup', funRange);
elInput3.addEventListener('keyup', funRange);

function funRange() {
  let n = 100 / elInput1.getAttribute("maxlength");
  elRenge1.style.width = `${elInput1.value.length * n}%`;
  elRenge2.style.width = `${elInput2.value.length}%`;
  elRenge3.style.width = `${elInput3.value.length / 10}%`;
}