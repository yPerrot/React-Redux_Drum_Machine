import React from 'react'
import { connect } from "react-redux"

import { changeDisplay, changeMain, changeVolume, switchDrum } from '../Store'
import { bankOne, bankTwo } from '../utils/SoundsBank'

class KeyBoard extends React.Component {

    constructor(props) {
        super(props)

        this.playSound = this.playSound.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown(e) {
        const btn = document.getElementById(e.keyCode.toString())
        if (btn === null) return
        btn.classList.add('pushed'); //add
    }

    handleKeyUp(e) {
        const audioBtn = document.getElementById(e.keyCode.toString())
        if (audioBtn === null) return
        this.playSound(audioBtn)
        document.getElementById(e.keyCode.toString()).classList.remove('pushed'); //remove
    }

    playSound(e) {
        if (!this.props.isOn) return
        const audio = e.firstElementChild
        const name = audio.id
        audio.volume = this.props.volume/100
        audio.play()
        this.props.changeDisplay(name)
    }

    render() {
        const sounds = this.props.isMainBank? bankOne : bankTwo
        const keys = sounds.map(e => {
            return (
                <button onClick={(e) => this.playSound(e.target)} key={e.id} id={e.keyCode}>
                    {e.keyTrigger}
                    <audio id={e.id}>
                        <source src={e.url} />
                        Your browser does not support the audio element.
                    </audio>
                </button>
            )
        })
        return (
            <div className="keyboard">
                {keys}
            </div>

        )
    }
}

const mapDispatchToProps = {
	changeMain,
	changeDisplay,
    changeVolume,
	switchDrum,
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyBoard)