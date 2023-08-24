import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Neter Park</h1>
            <h4 className="subtitle font-light">
              가장빠른 예약 사이트
              <br /> Neter Park
            </h4>
            <Link to="/" className="btn btn-md m-t-30 btn-secondary font-14">
              추천 목록
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner;
