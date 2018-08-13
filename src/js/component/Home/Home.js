import React from 'react';
import HeadBar from './HeadBar';
import WeeklyCheckBoard from './WeeklyCheckBoard';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			week: [
				{ id: 0, isChecked: false },
				{ id: 1, isChecked: false },
				{ id: 2, isChecked: false },
				{ id: 3, isChecked: false },
				{ id: 4, isChecked: false },
				{ id: 5, isChecked: false },
				{ id: 6, isChecked: false },
			],
		}
	}

	render() {
		return (
			<div >
				<HeadBar date={ this.getFirstAndLastDateOfThisWeek() }/>
				<WeeklyCheckBoard week={ this.state.week } 
					onClickCheckBox={ day => this.onClickCheckBox(day)}/>
			</div>
		);
	}

	onClickCheckBox(day) {
		this.setState( preState => this.getUpdateWeek(preState.week, day));
	}

	getUpdateWeek(week, day) {
		const newWeek = [...week];
		this.toggleTheDayCheck(newWeek, day);
		return { week: newWeek }; 
	}

	toggleTheDayCheck(week, day) {
		week[day].isChecked = !week[day].isChecked;
		return week;
	}

	getFirstAndLastDateOfThisWeek(){
		return { monday: this.getMonthAndDateOfThisWeek('monday'), sunday: this.getMonthAndDateOfThisWeek('sunday') }
	}

	getMonthAndDateOfThisWeek(day) {
		const now = new Date(Date.now());
		const monthAndDate = new Date(1900 + now.getYear(), now.getMonth(), this.getDateOfThisWeek(now, day));
		return this.getFormattedDateString( monthAndDate );
	}

	getDateOfThisWeek(now, day){
		const dayToInt = { 'monday': 1, 'sunday': 7 };
		return now.getDate() - now.getDay() + dayToInt[day];
	}

	getFormattedDateString(day) {
		return (day.getMonth() + 1) + '/' + day.getDate();
	}

}

export default Home;

