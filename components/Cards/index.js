// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

cardInformation = {
    headline: "", 
    authorPhoto: "", 
    authorName: ""
}

function cardMaker(cardInformation) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = cardInformation.headline;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');

    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', cardInformation.authorPhoto);

    const spanElement = document.createElement('span');
    spanElement.textContent =  `By ${cardInformation.authorName}`;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv);
    authorDiv.appendChild(spanElement);
    imgContainerDiv.appendChild(imgElement);

    document.querySelector('.cards-container').appendChild(cardDiv);   
}

//cardMaker(headlineInformation);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const responseObject = response.data.articles;

    const javascriptArray = responseObject.javascript;
    javascriptArray.forEach(javascriptArrayItem => {
        cardMaker(javascriptArrayItem);
    })
    const bootstrapArray = responseObject.bootstrap;
    bootstrapArray.forEach(bootstrapArrayItem => {
        cardMaker(bootstrapArrayItem);
    })
    const technologyArray = responseObject.technology;
    technologyArray.forEach(technologyArrayItem => {
        cardMaker(technologyArrayItem);
    })
    const jqueryArray = responseObject.jquery;
    jqueryArray.forEach(jqueryArrayItem => {
        cardMaker(jqueryArrayItem);
    })
    const nodeArray = responseObject.node;
    nodeArray.forEach(nodeArrayItem => {
        cardMaker(nodeArrayItem);
    })
})
.catch()