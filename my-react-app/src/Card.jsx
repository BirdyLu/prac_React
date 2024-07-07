import Student from './Student.jsx'

function Card(props){
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" alt="stop looking here" src="https://www.w3schools.com/images/lynx_landing.webp"></img>
                <Student className="card-title" name={props.name} age={props.age}/>
                <p className="card-text">
                    What? Why u asking me? Dont tell me what to do
                </p>
                <a href="#" className="btn btn-primary stretched-link">See Profile</a>
            </div>
        </div>
    );
}

export default Card