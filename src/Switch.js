import React from 'react'
import PropTypes from "prop-types";
import './Switch.css';

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/
export default class Switch extends React.Component {

    constructor(props) {
        super(props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    static defaultProps = {
        optionLabels: ["Yes", "No"]
    };
      
    static propTypes = {
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string,
        optionLabels: PropTypes.array,
        small: PropTypes.bool,
        disabled: PropTypes.bool
    };
      
    handleKeyPress(e) {
        // SpaceBar
        if (e.keyCode !== 32) return;
    
        e.preventDefault();
        this.props.onChange(!this.props.checked);
    }

    render() {
        return (
        <div className={"toggle-switch" + (this.props.small ? " small-switch" : "")}>
            <input
                type="checkbox"
                name={this.props.name}
                className="toggle-switch-checkbox"
                id={this.props.id}
                checked={this.props.checked}
                onChange={(e) => this.props.onChange(e.target.checked)}
                disabled={this.props.disabled}
            />
            {this.props.id ? (
                <label
                    className="toggle-switch-label"
                    tabIndex={this.props.disabled ? -1 : 1}
                    onKeyDown={(e) => this.handleKeyPress(e)}
                    htmlFor={this.props.id}
                >
                <span
                    className = {this.props.disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner"}
                    data-yes={this.props.optionLabels[0]}
                    data-no={this.props.optionLabels[1]}
                    tabIndex={-1}
                />
                <span
                    className={this.props.disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch"}
                    tabIndex={-1}
                />
                </label>
            ) : null}
        </div>
        );
    }
}
