import './tasks.css';
import Task from "../task/Task";

function Tasks() {
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <article className="col">
                        <h2>Pavadinimas</h2>
                        <p>Tekstas</p>
                        <ul className="row">
                            <li className="col-3">Facebook</li>
                            <li className="col-5">Instagram</li>
                            <li className="col">Twitter</li>
                        </ul>
                    </article>
                    <ul>    
                        <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                            <Task/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tasks