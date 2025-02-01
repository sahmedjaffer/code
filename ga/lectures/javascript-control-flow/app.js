/*
const val = 12;

// Ask: Is val exactly equal to 1?
if (val === 1) {
  console.log('This code runs because val is 1');
} else if(val !== 1){
    console.log('This code runs because val is not 1');
}
// Since val is 1, the answer is 'yes', so the code inside the if block runs.
*/


let color='red';
if (color==='green') {
  console.log('Go');
}
else if( color==='yellow'){
  console.log('Slow');
}
else if (color==='red'){
  console.log('Stop');

}
else{
  console.log('Whatever');
}




for( let num = 1; num<=20;num++){
  let square = num * num;
  console.log(`${num} squared is ${square}`);
}