import React from 'react';
import Arena from './components/arena';
import Menu from './components/menu';
import Hammer from './components/hammer';
import ScoreBoard from './components/score';
import Option from './components/option';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mousePos: ['50%', '50%'],
      deg: '-45deg',
      score: 0,
      holes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      target: 9,
      play: false,
      time: 15,
    }

    this.timer = 0;
    this.addScore = this.addScore.bind(this);
    this.setClicked = this.setClicked.bind(this);
    this.changeDeg = this.changeDeg.bind(this);
    this.setMousePos = this.setMousePos.bind(this);
    this.setPlay = this.setPlay.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  setMousePos(ev) {
    this.setState({mousePos: [ev.pageX, ev.pageY]});
  }

  setClicked() {
    this.changeDeg('-90deg');
    setTimeout(() => this.changeDeg('-45deg'), 100);
  }

  setTimer() {
    if(this.state.time === 0) {
      clearInterval(this.timer);
      this.setState({
        play: false,
        target: 9
      })
      alert(`Game Over!\nScore: ${this.state.score}`)

    } else {
      const randomNum = Math.floor(Math.random() * 10);
      this.setState(state => ({
        time: state.time -1,
        target: randomNum > 8? 8: randomNum,
      }))
    }
  }

  setPlay() {
    if(!this.state.play) {
      this.setState({
        play: true,
        time: 15,
        score: 0
      })
      this.timer = setInterval(this.setTimer, 1000);

    }
  }


  resetGame() {
    clearInterval(this.timer);
    this.setState({
      play: false,
      time: 15,
      target: 9,
      score: 0
    })
  }

  changeDeg(deg){
    this.setState({deg});
  }

  addScore(){
    this.setState(state => ({score: state.score +1}));
  }

  render() {
    return (
      <div className="outer-wrapper">
        <Hammer play={this.state.play} mousePos={this.state.mousePos} deg={this.state.deg} />
        <div className="inner-wrapper">
          <Menu setPlay={this.setPlay} play={this.state.play} />
          <div className="upper">
            <Option setPlay={this.setPlay} resetGame={this.resetGame} />
            <ScoreBoard score={this.state.score} time={this.state.time} />
          </div>
          <Arena
            mousePos={this.state.mousePos}
            score={this.state.score}
            addScore={this.addScore}
            setMousePos={this.setMousePos}
            holes={this.state.holes}
            setClicked={this.setClicked}
            play={this.state.play}
            target={this.state.target}
            time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default App;
