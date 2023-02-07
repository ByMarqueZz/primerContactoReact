const app = document.getElementById('app');

    function Cabecera() {
    return <>
        <h1>Develop. Preview. Ship. 🚀</h1>
        <ul>
            <li>Lista 1</li>
            <li>Lista 2</li>
        </ul>
        </>;
    }
    var pie = "Pie de página";
    function Pie(props) {
        return <h3>{pie} - Desarrollado por {props.desarrollador}</h3>;
    }
    ReactDOM.render(<><Cabecera /><Pie desarrollador="Paco"/></>, app);