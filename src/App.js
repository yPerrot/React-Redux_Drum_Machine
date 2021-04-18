import React from 'react'

import KeyBoard from './component/KeyBoard'
import DrumManager from './component/DrumManager'

import './style/App.css';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<KeyBoard />
				<DrumManager />
			</div>
		)
	}
}

export default App;