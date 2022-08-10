import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Components
import Home from './homeComponent';
import SearchNav from './searchNavComponent';
import BookPage from './bookComponent';
import About from './aboutComponent';
import Recommendations from './recommendationsComponent';

class Main extends Component {
	render() {
		return (
			<div>
				<SearchNav />
				<Switch>
					<Route path="/home" component={Home} />
					<Route exact path="/books" render={() => <BookPage />} />
					<Route exact path="/recommendations" render={() => <Recommendations />} />
					<Route exact path="/about" render={() => <About />} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default Main;
