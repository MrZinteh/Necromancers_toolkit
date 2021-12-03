import React from 'react';
import soul_pouch from './soul_pouch.png';

export class SoulRemover extends React.Component {
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
				className="soulRemover"
                onClick = { this.props.onClick }
				style = { this.style }>
				<img src={ soul_pouch } alt="soul_pouch" height="30px"/>
			</button>
		);
	}
}