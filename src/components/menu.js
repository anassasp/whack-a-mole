import React, {useState, useEffect} from 'react';

let timeInterval;

const Menu = (props) => {
    const [screen, setScreen] = useState({display: 'flex'});
    const [menuStyle, setMenuStyle] = useState({display: 'block'});
    const [countStyle, setCountStyle] = useState({display:'none'});
    const [start, setStart] = useState(false);
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if(start){
            if(countdown > 0){
                timeInterval = setInterval(() => {
                    setCountdown(prev => prev -1);
                }, 1000);
            } else {
                setStart(false);
                clearInterval(timeInterval);
                setScreen({display: 'none'});
                setCountStyle({display: 'none'});
                props.setPlay();
            }
        }
        return () => clearInterval(timeInterval);

    }, [props, countdown, start]);

    function startGame() {
        if(start === false) {
            setStart(true);
            setMenuStyle({display: 'none'});
            setCountStyle({display: 'block'});
        }
    }

    return(
        
    <div style={screen} className="startscreen">
        <h1 style={menuStyle}>Whack A Mole</h1>
        <button 
            style={menuStyle} 
            className="btn start"
            onClick={startGame} >
            Play!
        </button>
        <p 
        style={countStyle} 
        className="countdown">
            {countdown}
        </p>
        
        <img 
            src={process.env.PUBLIC_URL + 'mole.png'}
            alt="mole"
            className="mole-start" 
            onDragStart={(e) => {e.preventDefault()}}
        />
    </div>
    )
}

export default Menu;