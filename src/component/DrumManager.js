import React from 'react'
import { connect } from "react-redux"

import Switch from './Switch'
import { changeDisplay, changeMain, changeVolume, switchDrum } from '../Store'

class DrumManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOn: true,
            volume: 50, 
            display: "My Area"
        }

        this.switchDrumLocal = this.switchDrumLocal.bind(this)
        this.changeVolumeLocal = this.changeVolumeLocal.bind(this)
        this.changeBankLocal = this.changeBankLocal.bind(this)
	}

    switchDrumLocal() {
        const txt = !this.props.isOn ? "ON" : "OFF"
        this.props.switchDrum()
        this.props.changeDisplay(txt)
    }

    changeVolumeLocal(e) {
        if (!this.props.isOn) return
        const v = e.target.value
        this.props.changeVolume(v)
        this.props.changeDisplay("Volume : " + v)
    }

    changeBankLocal() {
        if (!this.props.isOn) return
        const txt = !this.props.isMainBank ? "Main Bank" : "Secondary Bank"
        this.props.changeMain()
        this.props.changeDisplay(txt)
    }

    render() {
        return (
            <div className="manager">
                <div className="switch-section">
                    <h1>Power</h1>
                    <Switch            
                        id="power"
                        checked={this.props.isOn}
                        onChange={this.switchDrumLocal}
                    />
                </div>

                <p className="display">{this.props.display}</p>

                <div className="volume-manager">
                    <label>Volume</label>
                    <br />
                    <input onChange={this.changeVolumeLocal} type="range" name="volume" min="0" max="100" value={this.props.volume}/>
                </div>

                <div className="switch-section">
                    <h1>Bank</h1>
                    <Switch            
                        id="bank"
                        checked={this.props.isMainBank}
                        onChange={this.changeBankLocal}
                    />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrumManager)