import Header from "./components/header/Header";
import SliderShow from "./components/slider/SliderShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/footer/footer";
//social media
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
//newspaper icon
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
function App() {
  return (
    <>
      <Header />
      <div className=" bg-dark">
        {" "}
        <div className="container__body container">
          <section className="part__1">
            <h1>CHÍNH TRỊ</h1>
          </section>
          <hr />

          <section className="part__2">
            <SliderShow />
          </section>
          <section className="part__3">
            <h2>
              Công bố phê duyệt đồ án Quy hoạch chung Đô thị mới Cam Lâm đến năm
              2045
            </h2>
          </section>

          <section className="part__4">
            <div className="part__4__body">
              <hr />
              <div className="date">02/03/2024 14:32</div>

              <div className="icon__list">
                <div className="icon__item">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon__item">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon__item">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="icon__item">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="icon__item">
                  <FontAwesomeIcon icon={faPinterest} />
                </div>
                <div className="follow__button rounded">
                  <span>
                    Theo dõi AJC News <span>Google News</span>
                  </span>
                </div>
              </div>

              <div className="tag__list">
                <div className="tag__item">#Khánh Hòa</div>
                <div className="tag__item">
                  #Chủ tịch Quốc hội Vương Đình Huệ
                </div>
                <div className="tag__item">
                  #Ban Thường vụ Tỉnh uỷ Khánh Hòa
                </div>
              </div>

              <div className="comment__input">
                <textarea placeholder="Bình luận"></textarea>
                <button className="btn btn-secondary rounded">
                  Gửi bình luận
                </button>
              </div>
            </div>
          </section>
          <div className="part__5">
            <h2 className="text-white">
              <span>
                <FontAwesomeIcon icon={faNewspaper} />
              </span>
              Tin liên quan
            </h2>
            <div className="post__list">
                <div className="post__item">
                    <img src="./imgSlide/anh1.jpg" alt="" />
                    <h3>Chủ tịch Quốc hội Vương Đình Huệ thăm, làm việc tại tỉnh Khánh Hòa</h3>
                    <div className="date__time">01/03/2024 18:48</div>
                </div>
                <div className="post__item">
                    <img src="./imgSlide/anh2.jpg" alt="" />
                    <h3>Nhiều tín hiệu khởi sắc cho ngành du lịch Khánh Hòa ngay từ đầu năm</h3>
                    <div className="date__time">21/02/2024 09:59</div>
                </div>
                <div className="post__item">
                    <img src="./imgSlide/anh3.jpg" alt="" />
                    <h3>Các hoạt động của Chủ tịch Quốc hội Vương Đình Huệ tại Khánh Hòa</h3>
                    <div className="date__time">01/03/2024 20:21</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
