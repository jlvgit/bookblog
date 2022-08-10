import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function bottomSection() {
	return (
		<Container fluid={true}>
			<Row className="m-3 m-sm-5">
				<Col>
					<img src="imgs/bagel.jpg" className="col-md-5 img-fluid rounded" alt="couch" />
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				<a href="#">
					<h2 className="article-heading abril m-5">What to eat while you read. Brain food.</h2>
				</a>
			</Row>
		</Container>
	);
}

export default bottomSection;
