import React from 'react';

const Tag = props => {
	
	return(
		<li>
			<input type='button'
				value={ '# ' + props.text }
				onClick={ event => props.onClick(event.target.value) }/>
		</li>
	);
}

export default Tag;

