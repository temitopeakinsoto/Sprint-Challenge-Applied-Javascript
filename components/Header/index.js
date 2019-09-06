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

const headerInfo = {
    date: "MARCH 28, 2019",
    heading: "Lambda Times",
    temp: "98"
}

function Header(headerInfo) {
    const divElement = document.createElement('div');
    divElement.classList.add('header');

    const firstSpanElement = document.createElement('span');
    firstSpanElement.classList.add('date');
    firstSpanElement.textContent = headerInfo.date;

    const h1Element = document.createElement('h1');
    h1Element.textContent = headerInfo.heading;

    const lastSpanElement = document.createElement('span');
    lastSpanElement.classList.add('temp');
    lastSpanElement.textContent = headerInfo.temp;

    divElement.appendChild(firstSpanElement);
    divElement.appendChild(h1Element);
    divElement.appendChild(lastSpanElement);
    
    document.querySelector('.header-container').appendChild(divElement);    
}

const header = Header(headerInfo);

