import React from 'react';
import { Container, Row, Col} from 'reactstrap';

// Components
import BookCard from './bookCardComponent'

function FeaturedBooks(props) {

    const featured = props.featured.map((book) => {
        return (
            <Col key={book.id} className="d-flex justify-content-center mb-5 overflow-hidden p-0">
                <BookCard book={book} />
            </Col>
        );
    });

    return (
        <Container fluid={true}>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mx-5-md">
                {featured}
            </Row>
        </Container>
    );

};

export default FeaturedBooks;
