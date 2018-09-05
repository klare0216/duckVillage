import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='box' 
				style={{ background: this.props.color }}
				onMouseDown={ event => this.props.onMouseDown(event, this.props.id ) }
				onMouseOver={ event => this.props.onMouseOver(event, this.props.id) }
			>
			</div>
		);
	}
}

export default Box;
