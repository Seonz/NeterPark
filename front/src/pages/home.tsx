import HeaderBanner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/herder";
import PropTypes from "prop-types";

const Components = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <div style={{ margin: "400px auto 400px", textAlign: "center" }}>
            메인내용부분입니다.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Components.propTypes = {
  classes: PropTypes.object,
};

export default Components;
