import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useRecoilState } from "recoil";
import { cateinfo } from "../../../components/atoms/product";
import apiClient from "../../../axiosConfig";
import { useEffect } from "react";



export default function Prouduct() {
    const [cata, setcate] = useRecoilState(cateinfo);
    const [list, setlist] = ([]);

    useEffect(() => {
        apiClient.get('listpro/' + cata)
            .then((res) => {
                setlist(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [cata]);

    const List = () => {
        if (list !== undefined) {
            return list.map((item) => (
                <Col md="4">
                    <Card className="card-shadow">
                        <img className="card-img-top" alt="wrappixel kit" src={item.imgurl} />
                        <CardBody>
                            <h5 className="font-medium m-b-0">{item.proName}</h5>
                            <p className="m-b-0 font-14">{item.proTime}</p>
                            <p className="m-b-0 font-14">{item.rmName}</p>
                            <p className="m-b-0 font-14">{item.salay}</p>
                        </CardBody>
                    </Card>
                </Col>
            ))
        } else {
            return (
                <Col md="4">
                    <Card className="card-shadow">
                        <h5 className="font-medium m-b-0">등록된 정보가 없습니다.</h5>
                    </Card>
                </Col>
            )
        }
    }
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="m-t-40">
                        <List />
                    </Row>
                </Container>
            </div>
        </div>
    )

}