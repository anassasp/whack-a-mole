

const Hammer = (props) => {
    return(
        <div 
            className="hammer" 
            style={{left: props.mousePos[0]+15+'px', top: props.mousePos[1]-50+'px', transform: `rotate(${props.deg}) translate(-50%, -50%)`, display: props.play? 'block': 'none'}}>
            <div className="steel"></div>
            <div className="stick"></div>
        </div>
    )
}
            
export default Hammer;