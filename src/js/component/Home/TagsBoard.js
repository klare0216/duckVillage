import React from 'react';

const TagsBoard = props => {
	return(
		<ul>
			<li>
				<input type='button'
					value="#tag1"
					onClick={ event => props.onClickTag(event.target.value) }/>
			</li>
			<li>
				<input type='button'
					value="#tag2"
					onClick={ event => props.onClickTag(event.target.value) }/>
			</li>
		</ul>
	);
}

export default TagsBoard;

