console.log('App.js is running');
const app= {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    items:['one','two']
};
const template = (
<div> 
    <h1>{app.title} </h1>
    
    {app.subtitle && <p>{app.subtitle }</p>}
<p>
{( app.items.length >0) ? "Here are your options" : "No Options"}</p>

<ol><li> {app.items[0]}</li>
<li> {app.items[1]} </li>
</ol>

</div>
);
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne');
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');
};
const reset = () => {
    count =0;
    renderCounterApp();
    console.log('reset');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}> +1 </button>
            <button onClick = {minusOne}> -1 </button>
            <button onClick = {reset}> reset </button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot );
};

renderCounterApp();


