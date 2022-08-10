import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Components
import Main from './components/mainComponent';
import FooterComponent from './components/footerComponent';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Main />
			</BrowserRouter>

			<FooterComponent />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
