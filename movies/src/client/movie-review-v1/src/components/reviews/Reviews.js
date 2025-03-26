import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/reviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>

                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm />
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;