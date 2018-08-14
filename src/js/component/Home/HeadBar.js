import React from 'react';
import { InputUi } from '../Ui/Ui';

const HeadBar = props => {
	const today = props.date;
    return (
        <div className='title-bar'>
          <div className='home-goal'>
			<p># 前端寫扣</p>
          </div>
          <h4 className='home-date'>{today}</h4>
        </div>
    );
}

export default HeadBar;
