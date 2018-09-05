import React from 'react';
import HeadBar from './HeadBar';
import Farm from './Farm';
import TimerBoard from './TimerBoard';
import TagsBoard from './TagsBoard';
import NoteInputBoard from './NoteInputBoard';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{ id: 0, display: '-', plant: 'empty', note: '' },
				{ id: 1, display: '-', plant: 'empty', note: '' },
				{ id: 2, display: '-', plant: 'empty', note: '' },
				{ id: 3, display: '-', plant: 'empty', note: '' },
				{ id: 4, display: '-', plant: 'empty', note: '' },
				{ id: 5, display: '-', plant: 'empty', note: '' },
				{ id: 6, display: '-', plant: 'empty', note: '' },
				{ id: 7, display: '-', plant: 'empty', note: '' },
			],
			tags: [
				{ id: 0, text: '讀書' },
				{ id: 1, text: '練琴' },
			],
			newTag: '',
			seconds: 0,
			timer: 0,
			plantingField: -1,
			isShowNoteInputBoard: false,
			isShowTagsBoard: false,
			doing: '',
		}
		this.plants = ['馬鈴薯', '蕃茄', '洋蔥'];
	}

	componentDidUpdate() {
		if (this.isCountDownJustEnded()) {
			const plant = this.plants[Math.floor((Math.random() * 10) % 3)];
			this.setField((field, state) => {
				field.plant = plant;
				field.display = state.doing;
			});
			this.setState({ isShowNoteInputBoard: true });
			this.stopTimer();
		}
	}

	setField(settingFunction, id = -1) {
		this.setState(preState => {
			let newFields = [...preState.fields];
			const index = (id == -1) ? preState.plantingField : id;
			settingFunction(newFields[index], preState);
			return { fields: newFields };
		});
	}

	isCountDownJustEnded() {
		return (this.isTimerStart() && this.state.seconds === 0);
	}

	render() {
		return (
			<div >
				<HeadBar />
				<Farm week={this.state.fields}
					onClickCheckBox={id => this.onClickField(id)} />
				{this.getTimerBoard()}
				{this.getTagsBoard()}
				{this.getNoteInputBoard()}
			</div>
		);
	}

	getTimerBoard() {
		if (this.isTimerStart())
			return (
				<TimerBoard time={this.getMinutesAndSeconds()}
					onClick={() => this.onClickToCancelPlanting()} />
			);
		return '';
	}

	getTagsBoard() {
		if (this.state.isShowTagsBoard)
			return (
				<TagsBoard
					onChangeInput={ event => this.onChangeInput(event) }
					onClickEnter={ () => this.createNewTag() }
					onClickTag={tag => this.onClickTag(tag)}
					tags={this.state.tags} />
			);
		return '';
	}

	onChangeInput(event) {
		this.setState({ newTag: event.target.value });
	}

	createNewTag() {
		this.setState( preState => {
			let newTags = [...preState.tags];
			newTags.push({ id: newTags.length, text: preState.newTag });
			return { tags: newTags };
		});
		this.onClickTag('# ' + this.state.newTag);
	}

	onClickTag(tagName) {
		this.setField(field => { field.display += " " + tagName; });
		this.setState({ doing: tagName, isShowTagsBoard: false });
		this.startTimer();
	}

	getNoteInputBoard() {
		if (this.state.isShowNoteInputBoard)
			return (
				<NoteInputBoard onClick={text => this.onClickEnter(text)} />
			);
		return '';
	}

	onClickEnter(text) {
		this.setField(fields => { fields.note = text; });
		this.setState({ isShowNoteInputBoard: false, plantingField: -1 });
	}


	onClickField(id) {
		if (this.isAbleToPlant(id)) {
			this.plantOnTheField(id);
			this.setState({ isShowTagsBoard: true });
		}
	}

	isAbleToPlant(id) {
		return (!this.isTimerStart() && !this.isTheFieldPlanted(id) && !this.isPlanting());
	}

	plantOnTheField(id) {
		// this.displayMessageOnTheFieldWithId('種植中', id);
		this.setField(field => { field.display = '種植中'; console.log('hi') }, id);

		this.setState({ plantingField: id });
	}

	isTheFieldPlanted(id) {
		return this.state.fields[id].display !== '-';
	}

	startTimer() {
		const timer = setInterval(() => this.decreaseTime(), 1000);
		this.setState({ timer: timer, seconds: 1 });
	}

	decreaseTime() {
		this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
	}

	getMinutesAndSeconds() {
		const seconds = this.state.seconds;
		return Math.floor(seconds / 60) + ':' + (seconds % 60);
	}

	onClickToCancelPlanting() {
		if (this.isPlanting()) {
			this.stopTimer();
			this.clearThePlantingField();
		}
	}

	clearThePlantingField() {
		this.setField(field => { field.display = '-'; });
		this.setState({ plantingField: -1 });
	}

	displayMessageOnTheFieldWithId(message, id) {
		console.log(id);
		this.setState(preState => this.getFieldsWithUpdateDisplay(preState.fields, id, message));
	}

	getFieldsWithUpdateDisplay(fields, plantingField, display) {
		if (plantingField >= 0) {
			let newFields = [...fields];
			newFields[plantingField].display = display;
			return { fields: newFields };
		}
	}

	stopTimer() {
		clearInterval(this.state.timer);
		this.setState({ timer: 0, seconds: 0 });
	}

	isPlanting() {
		return this.state.plantingField != -1;
	}

	isTimerStart() {
		return (this.state.timer !== 0);
	}

	componentWillUnmount() {
		if (this.state.timer != 0)
			clearInterval(this.state.timer);
	}

}

export default Home;

