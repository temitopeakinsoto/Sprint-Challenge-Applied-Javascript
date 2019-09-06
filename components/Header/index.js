// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const divElement = document.createElement('div');
    divElement.classList.add('header');

    const firstSpanElement = document.createElement('span');
    firstSpanElement.classList.add('date');
    firstSpanElement.textContent = "SMARCH 28, 2019";

    const h1Element = document.createElement('h1');
    h1Element.textContent = "Lambda Times";

    const lastSpanElement = document.createElement('span');
    lastSpanElement.classList.add('temp');
    lastSpanElement.textContent = "98";

    divElement.appendChild(firstSpanElement);
    divElement.appendChild(h1Element);
    divElement.appendChild(lastSpanElement);

    return divElement;
}

const header = Header();
document.querySelector('.header-container').appendChild(header);
