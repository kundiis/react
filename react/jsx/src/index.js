import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
	const lable = "Hi There!";
	return (
		<div style = {{ backgroundColor: 'yellow' }}> { lable } </div>
		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));