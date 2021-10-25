import React, {useState, useEffect} from 'react';
import mole from '../mole.png';


const showTarget = {
    transform: 'scale(1, 1)',
    pointerEvents: 'auto'
}

const hideTarget = {
    transform: 'scale(0, 0)',
    pointerEvents: 'none'
}

const Arena = (props) => {
    // const [deg, setDeg] = useState('-45deg');
    // const [mouse, setMouse] = useState();
    const [target, setTarget] = useState(9);

    useEffect(() => {
        // const randomNum = Math.floor(Math.random() * 10);
        if(props.play === true){
            setTarget(props.target);
        }
    }, [props.target, props.play])

    // function setMousePos(ev) {
    //     console.log([ev.pageX, ev.pageY]);
    //     setMouse([ev.pageX, ev.pageY]);
    // }

    // function setClicked() {
    //     setDeg('-90deg');
    //     setTimeout(function(){ setDeg('-45deg'); }, 200);
    // }

    // function generateNum() {
    //     let randomNum = Math.floor(Math.random() * 10);
    //     return randomNum > 8? 8: randomNum
    // }

    function targetClicked() {
        if(props.play && props.time>0) {
            props.addScore();
            // let num = generateNum();
            setTarget(9);
        }
    }

    function changeStyle(hole) {
        if(hole === target){
            return showTarget;
        } else {
            return hideTarget;
        }
    }
      
    return (
        <div className="bottom" 
            style={{cursor: props.play? 'none': 'auto'}} 
            onMouseMove={(ev) => props.setMousePos(ev)}
            onClick={props.setClicked}>
            <div className="holes">
                {props.holes.map(hole => (
                    <div key={hole} className="hole">
                        <img 
                            src={mole}
                            alt="mole"
                            className="target" 
                            onClick={targetClicked} 
                            style={changeStyle(hole)}
                            onDragStart={(e) => {e.preventDefault()}}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Arena;