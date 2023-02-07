const app = document.getElementById('app');

function Formulario() {
    function lanzarFormulario(props) {
        alert('Hola')
    }
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"/>
            <br/><br/>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" />
            <br/><br/>
            <button onClik={() => {lanzarFormulario()}}>Submit</button>
        </form>
    )
}

ReactDOM.render(<><Formulario/></>, app);