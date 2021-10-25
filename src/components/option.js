const Option = (props) => {
    return(
        <div className="option">
        <button className="btn play" onClick={props.setPlay}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-play" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 4v16l13 -8z" />
            </svg>
        </button>
            <button className="btn stop" onClick={props.resetGame}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-stop" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="5" y="5" width="14" height="14" rx="2" />
            </svg>
            </button>
        </div>
    )
}

export default Option;