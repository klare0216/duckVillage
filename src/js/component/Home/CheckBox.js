import React from 'react';

const CheckBox = props => {
	const displayWords = (props.isChecked) ? 'X' : props.day;
    return (
		<div className="card checkBox" onClick={() => props.onClick()}>
			<div className="card-content checkBox">
				{ displayWords }
			</div>
        </div>
    );
}

export default CheckBox;
