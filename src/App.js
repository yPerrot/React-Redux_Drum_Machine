import React from 'react'
import { connect } from "react-redux"

import KeyBoard from './component/KeyBoard'
import DrumManager from './component/DrumManager'
import { changeDisplay } from './Store'

import './style/App.css';

class App extends React.Component {

	constructor(props) {
		super(props)
		// this.state = {
		// 	isOn: true,
		// 	isMainBank: true,
		// 	display: ""
		// }
		// this.changeDrumState = this.changeDrumState.bind(this)
		// this.setText = this.setText.bind(this)

	}

	// changeDrumState() {
	// 	this.setState( state => ({
	// 		isOn: !state.isOn
	// 	}))
	// }

	// changeBank() {
	// 	this.setState( state => ({
	// 		isMainBank: !state.isMainBank
	// 	}))
	// }

	// setText(text) {
	// 	this.setState({
	// 		display: text
	// 	})
	// }

	render() {
		return (
			<div>
				<h1>{this.props.isOn ? "Ok" : "NOTOK"}</h1>
				<h1>{this.props.display}</h1>
				<h1>{this.props.isMainBank ? "Ok" : "NOTOK"}</h1>
				<button onClick={() => this.props.dispatch(changeDisplay('MyNewMessage'))}>Change Message</button>
			</div>
			// <div className="App">
			// 		<KeyBoard 
			// 			isOn={this.state.isOn}
			// 			display={this.state.display}
			// 			setText={this.state.setText}
			// 		/>
			// 		<DrumManager
			// 			isOn={this.state.isOn}
			// 			display={this.state.display}
			// 			changeDrumState={this.state.changeDrumState}
			// 			setText={this.state.setText}
			// 		/>
			// </div>
		)
	}
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(App)