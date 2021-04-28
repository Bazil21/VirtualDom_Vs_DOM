const js = document.getElementById("JS");
const reactDiv = document.getElementById("reactjs");
const heading = document.getElementById("head");
``

const App = () =>
{
    js.innerHTML = `
    <div class="split">
    JAVASCRIPT FORMAT / DOM
    <input /> 
    <p>${new Date()}</p>
    </div>`;

    var ReactJs = React.createElement(
            "div",
            {className: "split"},
            "React JS / Virtual DOM",
            React.createElement("input"),
            React.createElement(
                "p",
                null,
                new Date().toString()
            )
    );

    ReactDOM.render(ReactJs,reactDiv);
};
setInterval(App, 1000);
