import { useEffect, useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import apiClient from "../../../axiosConfig";

const HomePage = () => {
  const [data, setdata] = useState([]);

  // useEffect(() => {
  //   apiClient.get("/main/main")
  //     .then((res) => {
  //       console.log(res);
  //       setdata(res);
  //     })
  // }, []);

  // const datailCon = () => {
  //   fetch("http://localhost:8095/main")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setdata(data);
  //     });
  // };

  return (
    <Container>
      <Row>
        <div>실행돼니</div>
      </Row>
    </Container>
  );
};

export default HomePage;
