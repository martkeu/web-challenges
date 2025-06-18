console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// const likeButton = document.querySelector('[data-js="like-button"]');
// likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement('article');
article.classList.add("post");

const p = document.createElement('p');
p.classList.add("post__content"); 
p.textContent = "Lorem ipsum 222222222222222222222";

const footer = document.createElement('footer');
footer.classList.add("post__footer"); 

const span = document.createElement('span');
span.classList.add("post__username"); 
span.textContent = "@username";

const button = document.createElement('button');
button.classList.add("post__button"); 
button.setAttribute("type", "button"); 
button.setAttribute("data-js", "like-button"); 
button.textContent = "♥ Like";

footer.appendChild(span);
footer.appendChild(button);
article.appendChild(p);
article.appendChild(footer);

document.body.appendChild(article);


const likeButtons = document.querySelectorAll('[data-js="like-button"]');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", handleLikeButtonClick);
});