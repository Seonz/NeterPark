import HeaderBanner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/herder";
import HomePage from "./sections/homeform";

const Components = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <div style={{ margin: "400px auto 400px", textAlign: "center" }}>
            <HomePage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Components;
