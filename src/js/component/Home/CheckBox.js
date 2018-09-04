import React from 'react';

const CheckBox = props => {
	const plant = [ '馬鈴薯', '蕃茄', '洋蔥'];
	
	let field = props.plant ;
	if(props.display.split(' ')[0] === '種植中')
		field = '小苗';
	
	return (
		<div className="card checkBox" onClick={() => props.onClick()}>
			<div className="card-content checkBox">
				{ field }
			</div>
			<div className="card">
				{ props.display }
			</div>
			<div className="checkBox">
				{ props.note }
			</div>
        </div>
    );
}

export default CheckBox;
