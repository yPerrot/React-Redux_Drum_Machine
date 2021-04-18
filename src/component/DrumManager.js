import React from 'react'
import "../style//App.css"
import Switch from './Switch'

export default class DrumManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOn: true,
            volume: 50, 
            display: "My Area"
        }
		this.onNewsletterChange = this.onNewsletterChange.bind(this)
		this.onChangeVolume = this.onChangeVolume.bind(this)
	}

	onNewsletterChange() {
		this.setState({
			isOn: !this.state.isOn
		})
	}

    onChangeVolume(e) {
        this.setState({
            volume: e.target.value
        })
    }

    render() {
        return (
            <div className="manager">
                <div className="switch-section">
                    <h1>Power</h1>
                    <Switch            
                        id="newsletter"
                        checked={this.state.isOn}
                        onChange={this.onNewsletterChange}
                    />
                </div>

                <p className="display">{this.state.display}</p>

                <div className="volume-manager">
                    <label for="volume">Volume : {this.state.volume}</label>
                    <br />
                    <input onChange={this.onChangeVolume} type="range" id="volume" name="volume" min="0" max="100" value={this.state.volume}/>
                </div>

                <div className="switch-section">
                    <h1>Bank</h1>
                    <Switch            
                        id="newsletter"
                        checked={this.state.isOn}
                        onChange={this.onNewsletterChange}
                    />
                </div>
            </div>
        )
    }

}