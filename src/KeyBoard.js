import React from 'react'

export default class KeyBoard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="keyboard">
                <button>q</button>
                <button>w</button>
                <button>e</button>
                
                <button>a</button>
                <button>s</button>
                <button>d</button>
                
                <button>z</button>
                <button>x</button>
                <button>c</button>
            </div>
        )
    }
}