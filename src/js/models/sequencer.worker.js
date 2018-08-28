const noop = () => null;

self.onmessage = ({data}) => {
	(handlers[data] || noop)();
};

let interval;

const handlers = {
	start: () => {
		console.log('worker - start');
		interval = setInterval(handlers.tick, 100);
	},
	stop: () => {
		console.log('worker - stop');
		clearInterval(interval);
		interval = null;
	},
	tick: () => {
		console.log('worker - tick');
	},
	close: () => {
		self.close();
	}
};
