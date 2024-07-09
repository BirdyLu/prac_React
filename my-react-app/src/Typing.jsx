import { useState } from "react";

function Typing() {
    const placeHolder = "Type here..."
    const [text, setText] = useState('Type here...');

    const handleInput = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input placeholder={placeHolder} onChange={handleInput}></input>
            <br/>
            <p>{text}</p>
        </>
    );
};

export default Typing