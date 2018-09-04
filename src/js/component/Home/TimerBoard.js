import React from 'react';

const TimerBoard = props => {

	return(
		<div className='card'>
			<p className='card-content'> <span> 鴨鴨努力耕作中，再 { props.time } 時間就完成了！ </span>
				<button onClick={ () => props.onClick() }> 取消耕作 </button>
			</p>
		</div>
	);
};

export default TimerBoard;

