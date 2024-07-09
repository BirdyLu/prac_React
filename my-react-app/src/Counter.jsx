import {useState} from 'react';

function Counter(){
    let name = "Jerry";
    const [name, setName] = useState(); //useState returns a variable and a setter function.

    const updateName = () => {
        setName("SpongeBob");
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
        </div>
    );
}

export default Counter