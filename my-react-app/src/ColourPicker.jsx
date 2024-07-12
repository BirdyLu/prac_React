import { useState, useEffect} from "react"

function ColourPicker() {
    const colourCard = document.getElementById("ColourPicker");
    const [colour, setColour] = useState("#FFFFFF");

    useEffect(() => {
        if (colourCard) {
            colourCard.style.backgroundColor = colour;
        }}, 
        [colour]); // Dependency array, runs effect when colour changes

    function recordColour(e){
        setColour(e.target.value);
    }
    
    return(
        <>
            <input type="color" value={colour} onChange={recordColour}></input>
            <p style={{backgroundColor: colour}}>{colour}</p>
        </>
    );
}

export default ColourPicker