/* eslint-disable */
import React, { useState } from "react";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Input,
  Button,
} from "reactstrap";
import logo from "../assets/images/logos/mainlogo.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const search = () => {
    alert("기능만들어야함");
  };
  const bannerst = {
    positon: "relative",
    backgroundColor: "#76d7ea",
  };
  return (
    <div style={bannerst}>
      <Container>
        <Navbar className="navbar-expand-lg h2-nav">
          <NavbarBrand href="/">
            <img src={logo} alt="wrapkit" />
          </NavbarBrand>
          <div>
            <Input type="text" placeholder="검색어를  입력해주세요" />
          </div>
          <div>
            <BsSearch onClick={search} />
          </div>
          <NavbarToggler onClick={toggle}>
            <span className="ti-menu text-white"></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar id="header1">
            <Nav navbar className="ms-auto">
              <NavItem>
                <Link className="nav-link" to={"/login"}>
                  로그인
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/"}>
                  회원가입
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/"}>
                  마이페이지
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={"/"}>
                  예약확인 / 취소
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default Header;
