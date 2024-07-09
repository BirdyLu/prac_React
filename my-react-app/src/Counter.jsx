import {useState} from 'react';

function Counter(){

    const [count, setCounter] = useState(0); //to doefault by 0 upon refresh

    function minusCounter() {
        setCounter(count - 1);
    };

    function addCounter() {
        setCounter(count + 1);
    };

    function resetCounter() {
        setCounter(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={minusCounter}>Count down!</button>
            <button onClick={resetCounter}>RESET TO 0</button>
            <button onClick={addCounter}>Count up!</button>
        </div>
    );
}

export default Counter