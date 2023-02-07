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

function saltarEvento(props) {
    alert('Click!'+props.boton);
}

function ButtonApp (props) {
    return (
        <div>
            <button onClick={() => {saltarEvento(props)}}>Click me!</button>
        </div>
    );
}

ReactDOM.render(<><ButtonApp boton="1"/><ButtonApp boton="2"/><ButtonApp boton="3"/></>, app);