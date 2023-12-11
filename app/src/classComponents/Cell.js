import { Component } from 'react';

export class Cell extends Component {
	render() {
		return (
			<button
				className="w-24 h-24 text-2xl font-bold border"
				onClick={this.props.handleClick}
				style={{
					color: this.props.value === 'X' ? 'green' : 'red',
				}}
			>
				{this.props.value}
			</button>
		);
	}
}
