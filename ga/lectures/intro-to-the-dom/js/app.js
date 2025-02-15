const parEl = document.querySelector('.cool')
const titleEl=document.querySelector('h1');
console.log(parEl);
parEl.textContent='السلام على علم الهدى';
console.log(parEl);
titleEl.style.textAlign='center'
parEl.style.color='red'
const bodyEl=document.querySelector('body');
const h2El = document.createElement('h2');
h2El.textContent='مالي أرى قمر السماء تلثما ... والكون لما قد تلثم أظلما';
bodyEl.appendChild(h2El);
console.log(bodyEl);
const ilEls=document.querySelectorAll('il');


commentElements.forEach((commentElement) => {
    console.log(commentElement.textContent);
  });

  ilEls.forEach((item,idx )=> {
    item.textContent=`test ${idx=+1}`
    item.style.fontSize='30px';

  });