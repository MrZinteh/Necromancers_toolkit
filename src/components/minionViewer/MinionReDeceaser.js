import React from 'react';
import skull from './skull_icon.png';

export class MinionReDeceaser extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
			color: 'white',
			backgroundColor: '#456545',
			borderRadius: '12px',
			fontStyle: 'Helvetica',
			fontSize: '17px',
		}
	}
	render() {
		return (
			<button 
				className="minionReDeceaser"
                onClick = { this.props.onClick }
				style = { this.style }>
				<img src={ skull } alt="skull_icon" height="30px"/>
			</button>
		);
	}
}