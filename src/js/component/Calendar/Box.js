import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let input = this.props.text;
		let hr = (this.props.time % 2 === 0) ? this.props.time/2+6 : '';
		if(this.props.isShowInput) {
			input = (<input type='text' autoFocus 
						value={ this.props.text }
						onChange={ event => this.props.onChangeInput(event, this.props.id)} 
						onBlur={ event => this.props.onBlur(event, this.props.id)} />);
			 hr = (<strong>{(this.props.time % 2 === 0) ? this.props.time/2+6 : ''}</strong>);

		}
		return (
			<div className='box-container'>
				<span className="hr">{hr}</span>
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
