import { Link, useNavigate } from "react-router-dom";
import { Form, Col, Container, FormGroup, Input, Row } from "reactstrap";
import { useRecoilState } from "recoil";
//import apiClient from "../../../axiosConfig";
import { Userinfo } from '../../../components/atoms/login'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function LoginForm() {

    let navigate = useNavigate();
    const [user, setuser] = useRecoilState(Userinfo);
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [idset, setidset] = useState(false);

    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
            setuser({ userId: cookies.rememberUserId });
            setidset(true);
        }
    }, []);

    useEffect(() => {
        if (idset) {
            const expires = new Date();//현재시간을가져옴
            expires.setFullYear(expires.getFullYear() + 1);//기간설정 1년
            setCookie('rememberUserId', user.userId, { expires });//사용할위치선정
            return;
        } else {
            removeCookie('rememberUserId');
            return;
        }
    }, [idset]);

    const Login = () => {
        if (!user.userId) {
            alert("아이디를 입력해주세요 ")
            return;
        }
        if (!user.userPwd) {
            alert("비밀번호를 입력해주세요 ")
            return;
        }

        // apiClient.post("/login",user)
        //     .then((rep) => {
        //         if (rep.ok) {
        //             alert("정상적으로 로그인되었습니다.");
        // const expires = new Date();//현재시간을가져옴
        // expires.setFullYear(expires.getFullYear() + 1);//기간설정 1년
        //       setCookie('token', rep, { expires });//사용할위치선정
        //             navigate("/");
        //         } else {
        //             alert("정보가 옮바르지않습니다.");
        //         }
        //     }).catch((err) => {
        //         alert("정보가 옮바르지않습니다.");
        //     })
    }
    const inputinfo = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const activeEnter = (e) => {//엔터 누르면 로그인 실행 로직
        if (e.key === "Enter") {
            Login();
        }
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
                        <h6 className="subtitle">로그인 페이지</h6>
                    </Col>
                </Row>
            </Container>
            <div id="forms-component">
                <Container style={ContainerStyles}>
                    <Row>
                        <Col className="col-md">
                            <Form>
                                <FormGroup className="col-md-12">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="userId"
                                        placeholder="ID"
                                        onKeyDown={(e) => activeEnter(e)}
                                        onChange={inputinfo}
                                        value={user.userId}
                                    />
                                </FormGroup>

                                <FormGroup className="col-md-12">
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="userPwd"
                                        placeholder="Password"
                                        onKeyDown={(e) => activeEnter(e)}
                                        onChange={inputinfo}
                                    />
                                </FormGroup>
                                <Col md="12" className="text-center">
                                    <input
                                        type="button"
                                        className="btn btn-success waves-effect waves-light m-r-10 col-md-12"
                                        value={"로그인"}
                                        onClick={Login}
                                    />
                                </Col>
                            </Form>
                            <div>
                                <p />
                                아이디 저장 &nbsp;&nbsp;&nbsp;&nbsp;
                                <Input type="checkbox" onClick={() => {
                                    setidset(!idset);
                                }}
                                    checked={idset}
                                />
                                <Container className="text-center">
                                    <Link to={"/"}>
                                        Neter Park 회원가입
                                    </Link>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}