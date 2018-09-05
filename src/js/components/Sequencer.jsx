import React from 'react';
import PropTypes from 'prop-types';

import {Worker} from 'models';

export default class Sequencer extends React.Component {

	constructor (props) {
		super(props);
		this.tempo = 120;
		this.beats = 16;
		const w = this.worker = new Worker();
		w.onmessage = this.onMessage;
	}

	state = {}

	onMessage = (e) => {
		console.log(e.data);
	}

	onToggle = () => {
		const {
			state: {
				running
			},
			worker
		} = this;

		const message = running ? 'stop' : 'start';
		worker.postMessage(message);

		this.setState({
			running: !running
		});
	}

	render () {
		const {running} = this.state;
		const label = running ? 'Stop' : 'Start';

		return (
			<div className="controls">
				<button onClick={this.onToggle}>{label}</button>
			</div>
		);
	}
}
