import "./SliderShow.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default function SliderShow() {
  const BaseUrl = "/imgSlide/img";
  const pagination: any = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return (
        '<img src="' + BaseUrl + index + '.jpg" class="' + className + '" />'
      );
    },
  };
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        pagination={pagination}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
          <div className="main__slider">
            <img src={BaseUrl + "0.jpg"} alt="img0" />
            <figcaption>
              Sáng 2/3, tại thành phố Nha Trang (Khánh Hòa), Ủy viên Bộ Chính
              trị, Chủ tịch Quốc hội Vương Đình Huệ và các đại biểu đã tham dự
              lễ công bố Quyết định phê duyệt Đồ án Quy hoạch chung đô thị mới
              Cam Lâm đến năm 2045.
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider">
            <img src={BaseUrl + "1.jpg"} alt="img0" />
            <figcaption>
              Tại buổi lễ, Phó Thủ tướng Chính phủ Trần Hồng Hà đã trao Quyết
              định số 205/QĐ-TTg ngày 28/2/2024 của Thủ tướng Chính phủ phê
              duyệt Quy hoạch chung đô thị mới Cam Lâm đến năm 2045.
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider">
            <img src={BaseUrl + "2.jpg"} alt="img0" />
            <figcaption>
              Tiếp tục buổi lễ, Phó thủ tướng Trần Hồng Hà và các đại biểu thực
              hiện nghi thức bấm nút công bố Quyết định của Thủ tướng Chính phủ
              về Quy hoạch chung đô thị mới Cam Lâm, tỉnh Khánh Hòa.
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider">
            <img src={BaseUrl + "3.jpg"} alt="img0" />
            <figcaption>
              Trong bài phát biểu, Phó Thủ tướng nhấn mạnh đây là sự kiện có ý
              nghĩa đặc biệt quan trọng, tạo thêm động lực mới, sức lan tỏa
              trong thu hút đầu tư, phát triển Cam Lâm trở thành cực tăng trưởng
              phía Nam tỉnh Khánh Hòa và vùng Nam Trung Bộ; góp phần sớm đưa
              Khánh Hòa lên thành phố trực thuộc Trung ương. Trên tinh thần đó,
              Phó Thủ tướng đề nghị Khánh Hòa cần nỗ lực để tận dụng, phát huy
              đạt hiệu quả cao nhất những cơ chế đột phá, chính sách đặc thù đã
              được Quốc hội quyết định tại Nghị quyết số 55/2022/QH15 ngày
              11/6/2022, đặc biệt là phân cấp, thẩm quyền về quản lý quy hoạch,
              đất đai, trong giải phóng mặt bằng, tái định cư, triển khai các dự
              án đầu tư hiệu quả nhất. Phó Thủ tướng tin tưởng, Cam Lâm sẽ làm
              lên những kỳ tích mới, giá trị mới, nổi trội, mang sức sống, sáng
              tạo, khát vọng vươn lên, khát khao phát triển, phồn vinh và thịnh
              vượng.
            </figcaption>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
