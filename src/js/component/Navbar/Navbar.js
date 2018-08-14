import React from 'react';
import { Toolbar } from '../Ui/Ui';

class Navbar extends React.Component {
	render() {
		return (
			<Toolbar>
				<ul>
					<li><a>紀錄</a></li>
					<li><a>分析</a></li>
					<li><a href='#/Login'>使用者</a></li>
				</ul>
			</Toolbar>
		);
	}
}

export default Navbar;

