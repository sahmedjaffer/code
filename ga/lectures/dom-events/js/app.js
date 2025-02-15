const likeButtonElement = document.querySelector('#like-button');

// let's log it to confirm
console.dir(likeButtonElement);

const commentButtonElement = document.querySelector('#comment-button');

// let's log it to confirm
console.dir(commentButtonElement);



const commentListElement = document.querySelector('ul');
console.dir(commentListElement);

const inputElement= document.querySelector('input');


likeButtonElement.addEventListener('click', () => {
    console.log('You clicked me!');
  });
  
  commentButtonElement.addEventListener('click', () => {
    console.log("I work!");
  });

  commentButtonElement.addEventListener('click', () => {
    const commentElement = document.createElement('li');
    commentElement.textContent = inputElement.value; // replace placeholder text
    commentListElement.appendChild(commentElement);
  });
  
    
  commentButtonElement.addEventListener('click', () => {
    if (inputElement!=''){
    const commentElement = document.createElement('li');
    commentElement.textContent = 'Can you hear me?';
    commentListElement.appendChild(commentElement);
    }
  });
  
  