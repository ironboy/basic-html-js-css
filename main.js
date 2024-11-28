// Note:
// An easy to let JavaScript add new HTML to the web page
// is by adding it as a string to document.body.innerHTML

// Declare the variable user name
// and wait for the user to input their name
let userName = prompt("What's your name?");

// Add more html to the document.body 
// (a heading saying hell to the user)
document.body.innerHTML += `
  <h1>Hello ${userName}!</h1>
  <div class="multiplication-table"></div>
  <button class="new-table-button">New table</button>
`;

// Log a greeting to the console as weell
// (console - the built in 'terminal' in the 
//  web developer tools in the web browser)
console.log(`Hello ${userName}!`);

// Declare a function that ask the user for input
// and then displays txhe corresponding multiplication table
function displayMultiplicationTable() {

  // Ask the user for a multiplication table number
  let table = +prompt('Which multiplication table do you want to see?');

  // A heading for the multiplication table
  let html = `<h1>Multiplication table ${table}</h1>`;
  // A loop that generates the multiplication table
  for (let i = 1; i <= 12; i++) {
    html += `<p>${i} x ${table} = ${i * table}</p>`;
  }
  document.querySelector('.multiplication-table').innerHTML = html;

}

// Call the function
displayMultiplicationTable();

// Add an event handler that runs the function again to the button "Run again"
document.querySelector('.new-table-button').addEventListener(
  'click', displayMultiplicationTable
);