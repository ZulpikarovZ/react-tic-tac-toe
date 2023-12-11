import { Component } from 'react';

export class Restart extends Component {
	render() {
		return (
			<footer>
				<button
					className="text-4xl px-2 py-5 border rounded-md hover:opacity-80 active:opacity-50"
					onClick={this.props.restartHandler}
				>
					Restart!
				</button>
			</footer>
		);
	}
}
