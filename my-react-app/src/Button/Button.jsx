import styles from './Button.module.css'

function Button(){

    let count = 0;

    function handleClick(e) {
        count++;
        if (count <= 3) {
            e.target.textContent = `You clicked me ${count} times...`;
        } else if (count <= 10) {
            e.target.textContent = `Stop clicking me!`;
        } else {
            e.target.textContent = `I hate you 😠`;  
        }
    }

    return (
        <button className={styles.button} onClick={(e) => handleClick(e)}>快乐小公主Lisa</button>
    );
}

export default Button