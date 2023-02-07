const app = document.getElementById('app');

function Button() {
    const [counter, setCounter] = React.useState(0);

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function saltarEvento() {
    alert('Click!');
}

function ButtonApp () {
    
    return (
        <div>
            <button onClick={saltarEvento}>Click me!</button>
        </div>
    );
}

ReactDOM.render(<><ButtonApp /></>, app);