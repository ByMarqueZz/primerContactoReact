const app = document.getElementById('app');

function HelloWorld() {
    return <div class="square"><h1>Hello World!</h1></div>;
}

ReactDOM.render(<><HelloWorld /></>, app);