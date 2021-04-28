let js = document.getElementById("JS");
let reactjs = document.getElementById("reactjs");

const App = () =>
{
    js.innerHTML = `
    <div class="split">
    JAVASCRIPT FORMAT / DOM
    <input /> 
    <p>${new Date()}</p>
    </div>`  
};