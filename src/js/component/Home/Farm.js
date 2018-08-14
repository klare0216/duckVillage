import React from 'react';
import CheckBox from './CheckBox';

const Farm = props => {
	const checkBoxes = props.week.map( (day, index) => 
		(<CheckBox 
			onClick={ () => props.onClickCheckBox(index) }
			key={ day.id } 
			display={ day.display }
			/> )
	);

	return (
		<div>
			{ checkBoxes }
		</div>
	);
}

export default Farm;
