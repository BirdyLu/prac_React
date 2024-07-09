import Student from './Student.jsx'
import Counter from './Counter.jsx';
import Typing from './Typing.jsx';

function Card(props){
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" alt="stop looking here" src="https://www.w3schools.com/images/lynx_landing.webp"></img>
                <Student className="card-title" name={props.name} age={props.age} isStudent={props.isStudent} component="header" />
                {props.TrashTalk && <p className="card-text">What? Why u asking me? Dont tell me what to do</p>}
                {props.isStudent != null ? <Student className="card-title" name={props.name} age={props.age} isStudent={props.isStudent} component="paragraph"/> : null}
                {props.name=="Counter" && <Counter/>}
                {props.name=="Typing..." && <Typing/>}
            </div>
        </div>
    );
}

export default Card