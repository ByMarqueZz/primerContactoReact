const app = document.getElementById('app');

function Lista() {
    const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    const arrayHTML = array.map((animal, index) => <li key={index}>{animal}</li>)
    return (
        <ul>
            {arrayHTML}
        </ul>
        
    )
}

ReactDOM.render(<><Lista/></>, app);