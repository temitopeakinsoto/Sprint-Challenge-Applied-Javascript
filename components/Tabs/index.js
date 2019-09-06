// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabMaker(topic) {
    const tabDivElement = document.createElement('div');
    tabDivElement.classList.add('tab');
    tabDivElement.textContent = topic;

    document.querySelector('.topics').appendChild(tabDivElement);
}

//tabMaker("Sample TOPIC");
const tabUrl = 'https://lambda-times-backend.herokuapp.com/topics';
axios.get(tabUrl)
.then(response => {
    //console.log(response.data.topics);
    const topicsArray = response.data.topics;
    topicsArray.forEach( topicItem => tabMaker(topicItem) )
})
.catch(error => {
    //debugger
    const errorMessage = document.createElement('h1');
    errorMessage.textContent = `Could not create tabs! ${error.message}`;
    document.querySelector('.title').appendChild(errorMessage);
})
