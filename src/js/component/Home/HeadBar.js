import React from 'react';
import { InputUi } from '../Ui/Ui';

const HeadBar = props => {
	const { monday, sunday } = props.date;
    return (
        <div className='title-bar'>
          <div className='home-goal'>
            深度工作:<input  value='JS' />
          </div>
          <h4 className='home-date'>{monday} - {sunday}</h4>
        </div>
    );
}

export default HeadBar;
