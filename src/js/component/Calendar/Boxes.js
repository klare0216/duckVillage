import React from 'react';
import Box from './Box';

class Boxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [
				{ id: 6, taskId: '', color: '' },
				{ id: 7, taskId: '', color: '' },
				{ id: 8, taskId: '', color: '' },
				{ id: 9, taskId: '', color: '' },
				{ id: 10, taskId: '', color: '' },
				{ id: 11, taskId: '', color: '' },
				{ id: 12, taskId: '', color: '' },
				{ id: 13, taskId: '', color: '' },
				{ id: 14, taskId: '', color: '' },
				{ id: 15, taskId: '', color: '' },
				{ id: 16, taskId: '', color: '' },
				{ id: 17, taskId: '', color: '' },
				{ id: 18, taskId: '', color: '' },
				{ id: 19, taskId: '', color: '' },
				{ id: 20, taskId: '', color: '' },
				{ id: 21, taskId: '', color: '' },
				{ id: 22, taskId: '', color: '' },
				{ id: 23, taskId: '', color: '' },
				{ id: 0, taskId: '', color: '' },
			],
			focus: -1,
		}
		window.addEventListener('mouseup', () => this.onMouseUp() );
	}

	onMouseUp() {
		this.setState({ focus: -1 });
	}

	render() {
		return (
			<div className='boxes'>
                { this.getBoxes() }
			</div>
		);
	}

	getBoxes() {
		return this.state.boxes.map( (box, i) => (
			<Box key={ box.id } 
				id={ i }
				color={ box.color }
				onMouseDown={ (event, id) => this.onMouseDown(event, id) }
				onMouseOver={ (event, id) => this.onMouseOver(event, id) }
				/>
		));
	}

	onMouseDown(event, id) {
		event.preventDefault();
		console.log('down');
		console.log(id);
		this.setBox( boxes => {boxes[id].color = 'pink'});
		this.setState({ focus: id });
	}

	setBox(setting) {
		this.setState( preState => {
			let newBoxes = [...preState.boxes];
			setting(newBoxes);
			return { boxes: newBoxes };
		});
	}

	onMouseOver(event, id) {
		if(this.state.focus === -1) return;
		console.log('over');
		this.appendTheColorToTheBoxInTheRange(Math.min(id, this.state.focus), Math.max(id, this.state.focus));

	}

	appendTheColorToTheBoxInTheRange(min, max) {
		this.setBox( boxes => {
			for(let i in boxes) {
				boxes[i].color = (i >= min && i <= max) ? 'pink' : '';
			}
		});
		console.log(min, max);
	}


}

export default Boxes;
