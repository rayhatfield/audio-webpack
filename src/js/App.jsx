import React from 'react';
import DOM from 'react-dom';
import PropTypes from 'prop-types';

export default class App extends React.Component {
	render () {
		return (
			<div>App</div>
		);
	}
}

DOM.render(<App />, document.getElementById('app'));
