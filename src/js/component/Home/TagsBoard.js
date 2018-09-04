import React from 'react';
import Tag from './Tag';

const TagsBoard = props => {
	const render = props.tags.map( tag => {
		return (
			<Tag key={ tag.id }
				text={ tag.text }
				onClick={ props.onClickTag } />
		);
	});

	return(
		<div>
			<p>你接下來要做什麼努力呢？</p>
			<ul>
				{ render }
			</ul>
		</div>
	);
};

export default TagsBoard;

