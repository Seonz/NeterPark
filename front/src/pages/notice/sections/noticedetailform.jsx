
import { useEffect } from 'react';
import apiClient from '../../../axiosConfig';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { Noticeform, Noticelist } from '../../../components/atoms/board';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import { useState } from 'react';

export default function Noticedetailform(number) {
    const [datailnotice, setnotice] = useRecoilState(Noticeform);
    const [modify, setmodify] = useState(true);
    const [list, setlist] = useRecoilState(Noticelist);

    let reset = useResetRecoilState(Noticeform);

    useEffect(() => {
        console.log(number.number);
        sponnotice();
    }, []);

    const sponnotice = () => {
        apiClient.get("/search/" + number.number)
            .then((res) => {
                setnotice(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    const modfiynotice = () => {
        apiClient.put("/modify", datailnotice)
            .then((res) => {
                setnotice(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    const useinfomof = (event) => {
        setnotice({
            ...datailnotice,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Label>
                            글제목
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" value={datailnotice.ntitle} disabled={modify} name="ntitle" onChange={useinfomof} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        작성일자
                    </Col>
                    <Col>
                        <Input type="text" value={datailnotice.regDate} disabled={true} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        작성자
                    </Col>
                    <Col>
                        <Input type="text" value={datailnotice.userId} disabled={true} />
                    </Col>
                </Row><Row>
                    <Col>
                        글내용
                    </Col>
                    <Col>
                        <Input type="text" value={datailnotice.ncontent} disabled={modify} name="ncontent" onChange={useinfomof} />
                    </Col>
                </Row>
                {modify &&
                    <>
                        <input type="button" value={"뒤로가기"} onClick={() => {
                            setlist(true);
                        }} />
                        <input type="button" value={"수정"} onClick={() => {
                            setmodify(false);
                        }} />
                        <input type="button" value={"삭제"} onClick={() => {
                            apiClient.delete("/delete/" + number.number)
                                .then((res) => {
                                    if (res.data === 1) {
                                        setlist(true);
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })
                        }} />
                    </>
                }
                {!modify &&
                    <>
                        <input type="button" value={"뒤로가기"} onClick={() => {
                            reset();
                            sponnotice();
                            setmodify(true);
                        }} />
                        <input type="button" value={"수정하기"} onClick={() => {
                            reset();
                            modfiynotice();
                            setmodify(true);
                        }} />
                    </>
                }
            </Container>
        </div >
    )

}