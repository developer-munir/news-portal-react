import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import Leftsidenav from "../pages/Shared/Leftsidenav/Leftsidenav";
import Rightsidenav from "../pages/Shared/Rightsidenav/Rightsidenav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg='2' className='d-none d-lg-block'>
            <Leftsidenav></Leftsidenav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <Rightsidenav></Rightsidenav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
