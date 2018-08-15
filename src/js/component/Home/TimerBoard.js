import React from 'react';

const TimerBoard = props => {

	return(
		<div>
			<p>現在剩下: { props.time }
				<button onClick={ () => props.onClick() }>X</button>
			</p>
		</div>
	);
};

export default TimerBoard;

