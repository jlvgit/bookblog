import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SectionComponent = (props) => {
	return (
		<Container fluid={true} className="striped-section">
			<Row className="d-flex justify-content-center oswald">
				<p className="section-title new-release-title my-4">{props.section.title}</p>
			</Row>

			<Row>
				<Col className="col-md-4 m-3 m-sm-5">
					<a href="#">
						<img src={props.section.image} className="img-fluid rounded zoom" alt={props.section.title} />
					</a>
				</Col>
				<Col className={props.reversed ? 'm-5 order-last order-sm-first' : 'm-5'}>
					<a href="#">
						<h1 className="article-heading abril">{props.section.headline}</h1>
					</a>
					<p>Written by {props.section.author}</p>
					<p className="d-none d-sm-block">{props.section.preview}</p>

					<a className="btn btn-primary" href="#" role="button">
						Read More
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default SectionComponent;
