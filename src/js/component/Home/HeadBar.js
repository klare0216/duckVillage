import React from 'react';
import { InputUi } from '../Ui/Ui';

const HeadBar = props => {

	const getToday = () => {
		const now = new Date(Date.now());
		return getFormattedDateString(now);
	}

	const getFormattedDateString = (date) => {
		return (date.getMonth() + 1) + '/' + date.getDate();
	}

    return (
        <div className='title-bar'>
          <div className='home-goal'>
			<p># 前端寫扣</p>
          </div>
          <h4 className='home-date'>{getToday()}</h4>
        </div>
    );
}

export default HeadBar;
