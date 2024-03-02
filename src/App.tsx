import Header from "./components/header/Header";
import SliderShow from "./components/slider/SliderShow";
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
            <p>
              Ngày 2/3, Ủy ban nhân dân tỉnh Khánh Hòa tổ chức lễ công bố Quyết
              định của Thủ tướng Chính phủ phê duyệt Quy hoạch chung đô thị mới
              Cam Lâm đến năm 2045.
            </p>
            <p>
              Tham dự có{" "}
              <a href="https://nhandan.vn/chu-tich-quoc-hoi-vuong-dinh-hue-tham-cac-dong-chi-nguyen-lanh-dao-cap-cao-cua-lao-post785817.html">
                đồng chí Vương Đình Huệ
              </a>
              , Ủy viên Bộ Chính trị, Chủ tịch Quốc hội; các đồng chí Ủy viên
              Trung ương Đảng: Nguyễn Khắc Định, Phó Chủ tịch Quốc hội; Trần
              Hồng Hà, Phó Thủ tướng Chính phủ; Bùi Văn Cường, Tổng Thư ký Quốc
              hội, Chủ nhiệm Văn phòng Quốc hội; Nguyễn Thị Thanh, Trưởng Ban
              Công tác đại biểu thuộc Ủy ban Thường vụ Quốc hội; Vũ Hồng Thanh,
              Chủ nhiệm Ủy ban Kinh tế của Quốc hội; Lê Tấn Tới, Chủ nhiệm Ủy
              ban Quốc phòng và An ninh của Quốc hội; Lê Quang Huy, Chủ nhiệm Ủy
              ban Khoa học, Công nghệ và Môi trường của Quốc hội; Nguyễn Hải
              Ninh, Bí thư Tỉnh ủy Khánh Hòa. Tham dự còn có đại diện Văn phòng
              Quốc hội, lãnh đạo các ban, bộ, ngành Trung ương; các sở, ban,
              ngành địa phương tỉnh Khánh Hòa.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
