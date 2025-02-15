const likeButtonElement = document.querySelector('#like-button');
const dislikeButtonElement = document.querySelector('#dislike-button');
// let's log it to confirm
console.dir(likeButtonElement);

const commentButtonElement = document.querySelector('#comment-button');

// let's log it to confirm
console.dir(commentButtonElement);

const commentListElement = document.querySelector('ul');
console.dir(commentListElement);

const inputElement= document.querySelector('input');
let likesCount = 0;
let dislikesCount = 0; 

const handleReaction = (event) => {
  if (event.target.id === 'like-button'){
  likesCount += 1;
  likeButtonElement.textContent=`${likesCount} like(s). like this post!`;
}else {
  dislikesCount+=1;
  dislikeButtonElement.textContent=`${dislikesCount} dislike(s). Dislike this post!`;

}
}

likeButtonElement.addEventListener('click', handleReaction);

dislikeButtonElement.addEventListener('click', handleReaction)
  
commentButtonElement.addEventListener('click', () => {
    console.log("I work!");
  });
    
commentButtonElement.addEventListener('click', () => {
    if (inputElement.value!==""){
    const commentElement = document.createElement('li');
    commentElement.textContent = inputElement.value;
    commentListElement.appendChild(commentElement);
    }
  });


  
  