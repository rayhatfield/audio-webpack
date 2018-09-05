import React from 'react';
import PropTypes from 'prop-types';

import {Sequencer} from 'components';

import css from './App.scss';

export default class App extends React.Component {
	render () {
		return (
			<div className="app">
				<Sequencer />
			</div>
		);
	}
}
