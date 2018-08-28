import React from 'react';
import PropTypes from 'prop-types';

import {Sequencer} from 'models';

import css from './App.scss';

export default class App extends React.Component {
	constructor () {
		super();
		this.sequencer = new Sequencer();

	}

	onToggle = () => {
		const {sequencer, sequencer: {running}} = this;
		const method = running ? 'stop' : 'start';
		sequencer[method]();
		this.forceUpdate();
	}

	render () {
		const label = this.sequencer.running ? 'Stop' : 'Start';
		return (
			<div className="app">
				<div className="controls">
					<button onClick={this.onToggle}>{label}</button>
				</div>
			</div>
		);
	}
}
