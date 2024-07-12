import { useEffect, useState } from "react"

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(()=> {setTime(new Date())}, 1000); //is intervalID built in? 
        return () => { //when unmount. How does it know? 
            clearInterval(intervalID);
        }
    }, []); //[] for mount

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = (hours >= 12 ? 'PM' : 'AM');
        hours = hours % 12 || 12; 
        //If the result of hours % 12 is 0 (which happens for 0 and 12 in the 24-hour format), 
        //0 is considered falsy in JavaScript. Therefore, the logical OR will return 12, 
        //ensuring that midnight (0 hours) and noon (12 hours) are correctly 
        //represented as 12 in the 12-hour format.  
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num){
        return (num < 10 ? '0' : '')+(num);
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock