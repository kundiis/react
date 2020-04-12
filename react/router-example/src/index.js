import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {

	return (
		<div>
			Page one
            <Link to="/pagetwo">page 2 link</Link> // don't use href as it will refresh the page and loose react state
		</div>	
		);

};

const PageTwo = () => {

	return (
		<div>
			Page two
            <Link to="/">page 1 link</Link>
		</div>	
		);

};

const Header = () => {

	return (
		<div>
            Header       
		</div>	
		);

};


const App = () => {

	return (
		<div>
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
		</div>	
		);

}

ReactDOM.render(<App/>, document.querySelector('#root'));