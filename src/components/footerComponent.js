import React from 'react';
import { Col } from 'reactstrap';

function FooterComponent() {
	return (
		<footer>
			<div className="spacer d-flex justify-content-center">
				<Col className="col-md-4 fs-6">
					<p>
						This is a whole bunch of legal mumbo jumbo that no one will ever read. So I'm just gonna fill it
						up with pointless words and hope that nobody notices.
					</p>
				</Col>
			</div>
		</footer>
	);
}

export default FooterComponent;
