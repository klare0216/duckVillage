import React from 'react';
import CheckBox from './CheckBox';

const WeeklyCheckBoard = props => {
	const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const checkBoxes = props.week.map( (day, index) => 
		(<CheckBox 
			onClick={ () => props.onClickCheckBox(index) }
			key={ day.id } 
			day={ week[index] } 
			isChecked={ day.isChecked }	
			/> )
	);

	return (
		<div>
			{ checkBoxes }
		</div>
	);
}

export default WeeklyCheckBoard;
