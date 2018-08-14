import React from 'react';

const CheckBox = props => {
    return (
		<div className="card checkBox" onClick={() => props.onClick()}>
			<div className="card-content checkBox">
				{ props.display }
			</div>
        </div>
    );
}

export default CheckBox;
