import React from 'react';

export class CaptureButton extends React.Component {
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
				className="captureButton"
                onClick = { this.props.onClick }
				style = { this.style }>
				Capture!
			</button>
		);
	}
}