import React from 'react';
import Box from './Box';
import uuidv1 from 'uuid/v1';
class Boxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [
				{ id: 6, taskId: '50a02350-b18c-11e8-a959-f94a4b221fae', color: 'brown', task: '跑跑跳跳' },
				{ id: 7, taskId: '50a02350-b18c-11e8-a959-f94a4b221fae', color: 'brown', task: '' },
				{ id: 8, taskId: '', color: '', task: '' },
				{ id: 9, taskId: '', color: '', task: '' },
				{ id: 10, taskId: '', color: '', task: '' },
				{ id: 14, taskId: '', color: '', task: '' },
				{ id: 15, taskId: '', color: '', task: '' },
				{ id: 16, taskId: '', color: '', task: '' },
				{ id: 18, taskId: '', color: '', task: '' },
				{ id: 19, taskId: '', color: '', task: '' },
				{ id: 20, taskId: '', color: '', task: '' },
				{ id: 21, taskId: '', color: '', task: '' },
				{ id: 22, taskId: '', color: '', task: '' },
				{ id: 23, taskId: '', color: '', task: '' },
				{ id: 0, taskId: '', color: '', task: '' },
			],
			focus: -1,
			color: 'grey',
		}
		window.addEventListener('mouseup', () => this.onMouseUp());
	}

	onMouseUp() {
		this.setState({ focus: -1 });
		this.setBox(boxes => {
			const id = uuidv1();
			for (let i in boxes) {
				if (boxes[i].color !== '' && boxes[i].taskId === '') {
					if (boxes[i].color === 'pink' || boxes[i].color === 'red') {
						if (boxes[i].color === 'red') boxes[i].task = '-';
						boxes[i].color = this.state.color;
						boxes[i].taskId = id;
					}
				} else if (boxes[i].color === '' && boxes[i].taskId === '')
					boxes[i].color = '';
			}
		});
		console.log(this.state.boxes);
	}

	render() {
		return (
			<div>
				<p> color: {this.state.color} </p>
				<div className='boxes'>
					{this.getBoxes()}
				</div>
				<br />
				<button onClick={e => this.setState({ color: 'green' })}>green</button>
				<button onClick={e => this.setState({ color: 'black' })}>black</button>
			</div>
		);
	}

	getBoxes() {
		return this.state.boxes.map((box, i) => (
			<Box key={box.id}
				id={i}
				time={i+5}
				color={box.color}
				text={box.task}
				onMouseDown={(event, id) => this.onMouseDown(event, id)}
				onMouseOver={(event, id) => this.onMouseOver(event, id)}
				onBlur={(event, id) => this.onBlurInput(event, id)}
			/>
		));
	}

	onBlurInput(event, id) {
		const task = event.target.value;
		console.log(task);
		this.setBox(boxes => {
			boxes[id].task = task;
		});
	}

	onMouseDown(event, id) {
		event.preventDefault();
		if (this.state.boxes[id].color === '') {
			this.setBox(boxes => {
				boxes[id].color = 'red';
			});
			this.setState({ focus: id });
		}
	}

	setBox(setting) {
		this.setState(preState => {
			let newBoxes = [...preState.boxes];
			setting(newBoxes);
			return { boxes: newBoxes };
		});
	}

	onMouseOver(event, id) {
		if (this.state.focus === -1) return;
		this.appendTheColorToTheBoxInTheRange(Math.min(id, this.state.focus), Math.max(id, this.state.focus));
	}

	appendTheColorToTheBoxInTheRange(min, max) {
		this.setBox(boxes => {
			for (let i in boxes) {
				let j = i;
				if (this.state.focus !== min) j = (boxes.length - 1 - i);
				if (j == this.state.focus) continue;

				if (j > min && j <= max) {
					if (boxes[j].taskId == "")
						boxes[j].color = 'pink';
					else {
						break;
					}
				} else if (boxes[j].taskId == "" && boxes[j].color !== 'red') {
					boxes[j].color = '';
				}
			}
		});
	}
}

export default Boxes;
