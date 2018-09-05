const spec = {
	writable: false,
	enumerable: true
};

export default class SequencerEvent {
	constructor (data = {}) {
		Object.defineProperties(this, {
			MimeType: {
				...spec,
				value: this.constructor.MimeType,
			}
		})
	}
}
