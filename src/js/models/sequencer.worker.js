import StartEvent from './StartEvent';
import StopEvent from './StopEvent';

const noop = () => null;

self.onmessage = ({data}) => {
	const event = (handlers[data] || noop)();
	if (event) {
		postMessage(event);
	}
};

let interval;

const handlers = {
	start: () => {
		interval = setInterval(handlers.tick, 100);
		return new StartEvent();
	},

	stop: () => {
		clearInterval(interval);
		interval = null;
		return new StopEvent();
	},

	tick: () => {
		console.log('worker - tick');
	},

	close: () => {
		self.close();
	}
};
