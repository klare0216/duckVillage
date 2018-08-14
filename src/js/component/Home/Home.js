import React from 'react';
import HeadBar from './HeadBar';
import Farm from './Farm';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [
				{ id: 0, display: '-' },
				{ id: 1, display: '-'},
				{ id: 2, display: '-'},
				{ id: 3, display: '-'},
				{ id: 4, display: '-'},
				{ id: 5, display: '-'},
				{ id: 6, display: '-'},
			],
			seconds: 0,
			timer: 0,
			isTimerStart: false,
			plantingField: -1,
		}
	}

	componentDidUpdate() {
		if(this.isCountDownJustEnded()) {
			this.displayMessageOnTheField('做什麼?');
			this.stopTimer();
		}
	}

	isCountDownJustEnded() {
		return (this.state.isTimerStart && this.state.seconds === 0);	
	}

	render() {
		return (
			<div >
				<HeadBar date={ this.getNowDate() }/>
				<Farm week={ this.state.fields }
					onClickCheckBox={ id => this.onClickCheckBox(id)}/>
				<p>現在剩下 { this.getMinutesAndSeconds() }
					<button onClick={ () => this.onClickToCancelPlanting() }>X</button>
				</p>
				<ul>
					<li><input type='button' value="#tag2" onClick={ event => this.onClickTags(event.target.value) }/></li>
					<li><input type='button' value="#前端寫code" onClick={ event => this.onClickTags(event.target.value) }/></li>
					<li><input type='button' value="確定" onClick={ () => this.onClickYes() }/></li>
				</ul>
			</div>
		);
	}

	onClickYes() {
		if(this.state.timer === 0)
			this.setState({ plantingField: -1});
	}

	onClickTags(tagName) {
		this.displayMessageOnTheField(tagName);
	}

	getNowDate() {
		const now = new Date(Date.now());
		return this.getFormattedDateString(now);
	}

	getFormattedDateString(date) {
		return (date.getMonth() + 1) + '/' + date.getDate();
	}

	onClickCheckBox(id) {
		if(this.isAbleToPlant(id)) {
			this.displayMessageOnTheFieldWithId('種植中', id);
			this.setState({ plantingField: id});
			this.startTimer();
		}
	}

	isAbleToPlant(id) {
		return (!this.state.isTimerStart && this.state.fields[id].display === '-');
	}

	startTimer() {
		this.setState({ isTimerStart: true, seconds: 5 });
		const timer = setInterval(() => this.decreaseTime(), 1000);
		this.setState({ timer: timer});
	}

	decreaseTime() {
		this.setState((prevState) => ({ seconds :prevState.seconds - 1 }));
	}

	getMinutesAndSeconds() {
		const seconds = this.state.seconds;
		return Math.floor(seconds / 60) + ':' + (seconds % 60);
	}

	onClickToCancelPlanting() {
		if(this.state.plantingField != -1 && this.state.timer !== 0) {
			this.stopTimer();
			this.displayMessageOnThField('-');
			this.setState({ plantingField: -1 });
		}
	}

	displayMessageOnTheFieldWithId(message, id) {
		console.log(id);
		this.setState( preState => this.getFieldsWithUpdateDisplay(preState.fields, id, message));
	}

	displayMessageOnTheField(message) {
		this.setState( preState => this.getFieldsWithUpdateDisplay(preState.fields, preState.plantingField, message));
	}

	getFieldsWithUpdateDisplay(fields, plantingField, display) {
		if(plantingField >= 0) {
			let newFields = [...fields];
			newFields[plantingField].display = display;
			return { fields: newFields};
		}
	}

	stopTimer() {
		clearInterval(this.state.timer);
		this.setState({ isTimerStart: false , timer: 0});

	}

	componentWillUnmount() {
		if(this.state.timer != 0)
			clearInterval(this.state.timer);
	}

}

export default Home;

