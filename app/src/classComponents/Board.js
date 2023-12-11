import { Component } from 'react';
import { Cell } from './Cell';

export class Board extends Component {
	render() {
		return (
			<main className="flex flex-col mb-7 shadow-2xl">
				<div className="flex">
					<Cell value={this.props.squares[0]} handleClick={() => this.props.handleClick(0)} />
					<Cell value={this.props.squares[1]} handleClick={() => this.props.handleClick(1)} />
					<Cell value={this.props.squares[2]} handleClick={() => this.props.handleClick(2)} />
				</div>
				<div className="flex">
					<Cell value={this.props.squares[3]} handleClick={() => this.props.handleClick(3)} />
					<Cell value={this.props.squares[4]} handleClick={() => this.props.handleClick(4)} />
					<Cell value={this.props.squares[5]} handleClick={() => this.props.handleClick(5)} />
				</div>
				<div className="flex">
					<Cell value={this.props.squares[6]} handleClick={() => this.props.handleClick(6)} />
					<Cell value={this.props.squares[7]} handleClick={() => this.props.handleClick(7)} />
					<Cell value={this.props.squares[8]} handleClick={() => this.props.handleClick(8)} />
				</div>
			</main>
		);
	}
}
