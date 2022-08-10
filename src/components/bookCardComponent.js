import React from 'react';
import { Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const BookCard = (props) => {
	return (
		<a href="#">
			<Card className="bg-dark">
				<CardImg width="100%" src={props.book.image} alt={props.book.title} />
				<CardImgOverlay className="d-flex flex-column justify-content-end">
					<div className="card-text-bg">
						<CardText>{props.book.blurb}</CardText>
					</div>
				</CardImgOverlay>
			</Card>
		</a>
	);
};

export default BookCard;
