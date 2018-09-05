import React from 'react';
import Tag from './Tag';

class TagsBoard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isShowCreatNewTag: false,
		}
	}

	render() {
		return (
			<div>
				<p>你接下來要做什麼努力呢？</p>
				<ul>
					{this.getTags()}
				</ul>
				<button onClick={() => this.setState({ isShowCreatNewTag: true })}>+</button>
				{this.getInsertNewTagsInput()}
			</div>
		);
	}

	getTags() {
		return this.props.tags.map(tag => {
			return (
				<Tag key={tag.id}
					text={tag.text}
					onClick={this.props.onClickTag} />
			);
		});
	}

	getInsertNewTagsInput() {
		if (this.state.isShowCreatNewTag) {
			return (
				<div>
					<input onChange={ this.props.onChangeInput } type='text' />
					<button onClick={ this.props.onClickEnter }>Enter</button>
				</div>
			);
		}
	}
	


};

export default TagsBoard;

