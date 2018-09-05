import SequencerEvent from './SequencerEvent';

export default class StartEvent extends SequencerEvent {
	static MimeType = 'application/vnd.raytheist.sequencer.events.stopevent'
}
