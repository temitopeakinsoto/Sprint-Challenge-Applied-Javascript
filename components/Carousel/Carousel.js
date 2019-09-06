/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  const outterDiv = document.createElement('div');
  outterDiv.classList.add('carousel');
  const imgElements = [];
  for(let i=0; i < 6; i++){
    if(i === 0){
      const firstNestedDiv = document.createElement('div');
      firstNestedDiv.classList.add('left-button');
      outterDiv.appendChild(firstNestedDiv);
    }
    else if (i > 0 && i < 5){
      const img = document.createElement('img');

      outterDiv.appendChild(img);
      imgElements.push(img);
      
    } else {
      const lastNestedDiv = document.createElement('div');
      lastNestedDiv.classList.add('right-button');
      outterDiv.appendChild(lastNestedDiv);
    }
  }
  const imgUrl = ['mountains.jpeg', 'computer.jpeg', 'trees.jpeg', 'turntable.jpeg'];
  for (let i=0; i < imgUrl.length; i++){
    imgElements[i].style.display = "block";
    imgElements[i].setAttribute('src', `./assets/carousel/${imgUrl[i]}`);

  }
    
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(outterDiv);
  console.log('this outter div is', outterDiv);
}
carouselMaker();
