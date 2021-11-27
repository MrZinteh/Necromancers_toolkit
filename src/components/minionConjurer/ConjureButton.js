import React from 'react';

export class CaptureButton extends React.Component {
	render() {
		return (
			<button 
				className="conjureButton"
                onClick = { this.props.onClick }>
				Conjure!
			</button>
		);
	}
}