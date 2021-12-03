import React from 'react';

export class DrainButton extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
			color: 'white',
			backgroundColor: '#456545',
			padding: '8px 32px',
			borderRadius: '12px',
			fontStyle: 'Helvetica',
			fontSize: '17px'
		}
	}
	render() {
		return (
			<button 
				className="drainButton"
                onClick = { this.props.onClick }
				style = { this.style }>
				Drain!
			</button>
		);
	}
}