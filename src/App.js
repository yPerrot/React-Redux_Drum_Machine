import React from 'react'

import KeyBoard from './KeyBoard'
import DrumManager from './DrumManager'

import './App.css';

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isOn: true
		}
		this.onNewsletterChange = this.onNewsletterChange.bind(this)
	}

	onNewsletterChange() {
		this.setState({
			isOn: !this.state.isOn
		})
	}

	render() {
		return (
			<div className="App">
					<KeyBoard />
					<DrumManager />
			</div>
		)
	}
}