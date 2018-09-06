import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let input = this.props.text;
		if(this.props.text === "-") input = (<input type='text' autoFocus onBlur={ event => this.props.onBlur(event, this.props.id)} />);
		return (
			<div className='box-container'>
				<span className="hr">{this.props.time}</span>
				<div className='box'
					style={{ backgroundColor: this.props.color }}
					onMouseDown={event => this.props.onMouseDown(event, this.props.id)}
					onMouseOver={event => this.props.onMouseOver(event, this.props.id)}
				>
				</div>
				<span>{input}</span>
			</div>
		);
	}
}

export default Box;
