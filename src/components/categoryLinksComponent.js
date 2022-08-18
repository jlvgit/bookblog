import React from "react";
import { Container, Row, Col } from "reactstrap";

import bookstore from "../images/bookstore.jpg";
import readingspot from "../images/readingspot.jpg";
import showbook from "../images/showbook.jpg";

const CategoryLinks = () => {
    return (
        <Container fluid={true}>
            <Row className="row-cols-1">
                <Col className="col-md-4 text-center mb-5 p-0">
                    <div className="oswald">
                        <p className="section-title">BOOKS</p>
                    </div>
                    <a href="#">
                        <img src={bookstore} className="img-fluid w-75 zoom" alt="bookstore" />
                    </a>
                </Col>
                <Col className="col-md-4 text-center mb-5 p-0">
                    <div className="oswald">
                        <p className="section-title">READING SPOTS</p>
                    </div>
                    <a href="#">
                        <img src={readingspot} className="img-fluid w-75 zoom" alt="readingspot" />
                    </a>
                </Col>
                <Col className="col-md-4 text-center mb-5 p-0">
                    <div className="oswald">
                        <p className="section-title">RECOMMENDATIONS</p>
                    </div>
                    <a href="#">
                        <img src={showbook} className="img-fluid w-75 zoom" alt="showbook" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryLinks;
