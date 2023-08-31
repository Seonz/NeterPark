import { Link, useNavigate } from "react-router-dom";
import { Form, Col, Container, FormGroup, Input, Row } from "reactstrap";
import { useRecoilState, useResetRecoilState } from "recoil";
//import apiClient from "../../../axiosConfig";
import { Joininfo } from '../../../components/atoms/login'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import apiClient from "../../../axiosConfig";

export default function JoinForm() {

    let reset = useResetRecoilState(Joininfo);
    let navigate = useNavigate();
    const [user, setuser] = useRecoilState(Joininfo);

    const join = () => {
        if (!user.userId) {
            alert("아이디를 입력해주세요 ")
            return;
        }
        if (!user.userPwd) {
            alert("비밀번호를 입력해 주세요 ")
            return;
        }
        
        if (!user.userName) {
            alert("이름를 입력해 주세요 ")
            return;
        }
        if (!user.userEmail) {
            alert("이메일를 입력해 주세요 ")
            return;
        }
        if (!user.userPhoneF) {
            alert("전화번호를 입력해 주세요 ")
            return;
        }
        if (!user.userPhoneM) {
            alert("전화번호를 입력해 주세요 ")
            return;
        }

        if (!user.userPhoneL) {
            alert("전화번호를 입력해 주세요 ")
            return;
        }
        if (!user.userAddr) {
            alert("주소를 입력해 주세요 ")
            return;
        }
        apiClient.post("/signup", user)
            .then((rep) => {
                reset();
                    navigate("/login");
            }).catch((err) => {
                alert("에러");
            })
    }
    const inputinfo = (e) => {

        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user);

    }

    const ContainerStyles = {
        width: "500px",
    };
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md="7" className="text-center">
                        <h1 className="title font-bold">Neter Park</h1>
                        <h6 className="subtitle">회원가입</h6>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <div id="forms-component">
                <Container style={ContainerStyles}>
                    <Form>
                        <Row>
                            <Col className="col-md">
                                <FormGroup className="col-md-12">
                                    <span class="blet">*</span> 아이디
                                </FormGroup>

                                <FormGroup className="col-md-12">
                                </FormGroup>

                            </Col>
                            <Col>
                                <input type="text" name="userId" size="20" maxlength="16" onChange={inputinfo} />
                                <input type="button" value="중복 검사" onClick="CheckDup();" class="btnDup" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span class="blet">*</span> 비밀번호
                            </Col>
                            <Col>
                                <input type="password" name="userpw" size="20" maxlength="16" onChange={inputinfo} />
                                <span class="f12 fC666">※ 8~16글자의 영어, 숫자 혼용</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span class="blet">*</span> 비밀번호 확인
                            </Col>
                            <Col>
                                <input type="password" name="userPwd" size="20" maxlength="16" onChange={inputinfo} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span class="blet">*</span> 이름
                            </Col>
                            <Col>
                                <input type="text" name="userName" size="15" maxlength="6" onChange={inputinfo} />
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                전화
                            </Col>
                            <Col>
                                <input type="text" name="userPhoneF" size="3" maxlength="3" onChange={inputinfo} />
                                -
                                <input type="text" name="userPhoneM" size="4" maxlength="4" onChange={inputinfo} />
                                -
                                <input type="text" name="userPhoneL" size="4" maxlength="4" onChange={inputinfo} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                이메일
                            </Col>
                            <Col>
                                <input type="text" id="addr" name="userEmail" placeholder="이메일" onChange={inputinfo} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                주소
                            </Col>
                            <Col>
                                <input type="text" id="addr" name="userAddr" placeholder="주소" onChange={inputinfo} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" className="text-center">
                                <br></br>
                                <input
                                    type="button"
                                    className="btn btn-success waves-effect waves-light m-r-10 col-md-12"
                                    value={"회원가입"}
                                    onClick={join}
                                />
                            </Col>

                        </Row>
                    </Form>
                </Container>
            </div>
        </div >
    )
}