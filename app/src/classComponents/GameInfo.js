import { Component } from 'react';

export class GameInfo extends Component {
	render() {
		return (
			<header className="mb-4">
				<div className="text-4xl">{this.props.info}</div>
			</header>
		);
	}
}
