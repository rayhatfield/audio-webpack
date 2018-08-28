import Emitter from 'events';

import Worker from './sequencer.worker';

export default class Sequencer extends Emitter {
	constructor (tempo = 120, beats = 16) {
		super();
		this.tempo = 120;
		this.beats = 16;
		const w = this.worker = new Worker();
		w.onmessage = this.onmessage;
	}

	onmessage = e => {
		console.log(e);
	}

	start = () => {
		this.worker.postMessage('start');
		this.running = true;
	}

	stop = () => {
		this.worker.postMessage('stop');
		this.running = false;
	}
}
