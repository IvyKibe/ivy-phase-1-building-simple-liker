// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyph = document.querySelector('.like-glyph');
const modal = document.querySelector('#modal'); // select the error modal element
modal.classList.add('hidden'); // add the .hidden class to it

const emptyHeart = document.querySelector('.empty-heart'); // select the empty heart element

likeGlyph.addEventListener('click', () => {
mimicServerCall()
.then(() => {
likeGlyph.innerHTML = '♥';
likeGlyph.classList.add('activated-heart');
})
.catch (error => {
 modalMessage.innerText = error
 modal.classList.remove('hidden');

setTimeout(() => {
  modal.classList.add('hidden'); // add the .hidden class to hide the error modal after 3 seconds
}, 3000);

});
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}