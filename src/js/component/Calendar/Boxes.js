import React from 'react';
import Box from './Box';
import uuidv1 from 'uuid/v1';
class Boxes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [
				{ id: 8, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 9, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 10, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 14, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 15, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 16, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 18, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 19, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 20, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 21, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 22, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 23, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 0, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 1, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 2, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 3, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 4, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 5, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 23, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 0, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 1, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 2, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 8, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 9, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 10, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 14, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 15, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 16, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 18, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 19, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 20, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 21, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 22, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 23, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 0, taskId: '', color: '', task: '', isShowInput: false },
				{ id: 1, taskId: '', color: '', task: '', isShowInput: false },
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
			let isFirst = true;
			for (let i in boxes) {
				if (this.isBoxChoosen(boxes[i])) {
					if (isFirst) {
						boxes[i].isShowInput = true;
						isFirst = false;
					}
					boxes[i].color = this.state.color;
					boxes[i].taskId = id;
				}
			}
		});
	}

	isBoxChoosen(box) {
		return box.color !== '' && box.taskId === '';
	}

	render() {
		return (
			<div>
				<div className='boxes'>
					{this.getBoxes()}
				</div>
				<br />
				<p> color: {this.state.color} </p>
				<button onClick={e => this.setState({ color: 'green' })}>green</button>
				<button onClick={e => this.setState({ color: 'black' })}>black</button>
			</div>
		);
	}

	getBoxes() {
		return this.state.boxes.map((box, i) => (
			<Box key={box.id}
				id={i}
				time={i}
				color={box.color}
				text={box.task}
				isShowInput={box.isShowInput}
				onMouseDown={(event, id) => this.onMouseDown(event, id)}
				onMouseOver={(event, id) => this.onMouseOver(event, id)}
				onBlur={(event, id) => this.onBlurInput(event, id)}
				onChangeInput={(event, id) => this.onChangeInput(event, id)}
			/>
		));
	}

	onBlurInput(event, id) {
		const task = event.target.value;
		this.setBox(boxes => {
			boxes[id].task = task;
			boxes[id].isShowInput = false;
		});
	}

	onChangeInput(event, id) {
		const task = event.target.value;
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
		} else if (this.state.boxes[id].taskId !== '') {
			this.setBox(boxes => {
				const taskId = boxes[id].taskId;
				for (let i in boxes) {
					if (boxes[i].taskId === taskId) {
						boxes[i].isShowInput = true;
						break;
					}
				}
			});
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
				let index = i;
				if (this.state.focus !== min) index = (boxes.length - 1 - i);

				const box = boxes[index];
				const isInTheRange = (index >= min && index <= max);
				if (index !== this.state.focus) {
					if (isInTheRange && this.isBoxesHasTask(box)) break;
					else if(isInTheRange) box.color = 'pink';
					else if (box.taskId === "") box.color = '';
				}
			}
		});
	}

	isBoxesHasTask(box) {
		return box.taskId !== "";
	}
}

export default Boxes;
