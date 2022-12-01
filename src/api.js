//Variables y selectores
let pTarget = document.querySelector('p');
let buttonTarget = document.querySelector('button');

//ASYNC AWAIT MODE

function appendHTML (sentence) {
    pTarget.textContent = sentence;
}

async function fetchMyUrl() {

    let response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    let text = await response.json();
    return pTarget.textContent = text.text;
}

  

//Listeners
buttonTarget.addEventListener('click', fetchMyUrl);



//NORMAL MODE

// //Functions
// let response = () => { 
//     fetch('https://uselessfacts.jsph.pl/random.json?language=en')
//     .then(response => response.json())
//     .then(response => {
//         return appendHTML(response.text)
//         });
// }
// function appendHTML (sentence) {
//     pTarget.textContent = sentence;
// }

// //Listeners
// buttonTarget.addEventListener('click', response);