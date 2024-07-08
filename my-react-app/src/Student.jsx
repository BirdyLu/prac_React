import PropTypes from 'prop-types'

function Student(props){
    if (props.component === 'header') {
        return(
            <h2 className="card-title">{props.name}</h2>
        );
    } else if (props.component === 'paragraph') {
        return(
            <p className="card-text">
                Age: {props.age} <br/>
                Is student: {props.isStudent ? "True" : "False"}
            </p>
        );
    }
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    component: PropTypes.string,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
    component: '',
}

export default Student