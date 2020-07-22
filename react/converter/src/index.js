import React from 'react';
import ReactDOM from 'react-dom';
import ConverterBar from './ConverterBar';
import MenuBar from './MenuBar';

const App = () => {

	return (
		<div className="ui container">
			<MenuBar/>
			<div className="ui container">
				<ConverterBar></ConverterBar>
			</div>
		</div>
		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));