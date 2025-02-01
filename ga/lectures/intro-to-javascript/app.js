const friendName = ['Sayed Mustafa','Jaafar','Abood'];
const myName="Sayed";
let greeting = `Hello,`;

for (let i =0; i < friendName.length;i++){
    greeting = `Hello, darling ${friendName[i]}. from ${myName}`;

    console.log(greeting);
    // Prints: Hello, friend.
}
