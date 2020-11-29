import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__left">
          <h3 className="footer__left--title">
            NHẬN TIN SỰ KIỆN &amp; KHUYẾN MÃI
          </h3>
          <p className="footer__left--desc">
            CyberSoft sẽ gởi các khóa học trực tuyến &amp; các chương trình
            CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn
            đến các bạn.
          </p>
          <form>
            <div className="input-group mb-3">
              <input
                type="email"
                className="field"
                placeholder="Email của bạn"
              />
              <button className="btn" type="submit">
                đăng ký
              </button>
            </div>
          </form>
        </div>
        <div className="footer__mid">
          <div className="contact-box">
            <h2>Liên hệ</h2>
            <input type="text" className="field" placeholder="Tên của bạn" />
            <input type="email" className="field" placeholder="Email của bạn" />
            <input
              type="text"
              className="field"
              placeholder="Số điện thoại của bạn"
            />
            <textarea
              className="field area"
              placeholder="Tin nhắn"
              defaultValue={""}
            />
            <button className="btn" type="submit">
              gửi
            </button>
          </div>
        </div>
        <div className="footer__right">
          <div className="iframe">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvoaeasy%2F&tabs=timeline%2C%20events&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width={500}
              height={500}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--right">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
                Trụ sở: 112 Cao Thắng, Quận 3 – HCM
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
                Cơ sở 2: 376 Võ Văn Tần – Quận 3
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
                Cơ sở 3: 459 Sư Vạn Hạnh – Quận 10
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
                Cơ sở 4: 82 Ung Văn Khiêm – Bình Thạnh
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" />
                Cơ sở 6: 56 Lê Cảnh Tuân – Tân Phú
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-phone" />
                Hotline: 096.105.1014 – 077.886.1911
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom--mid">
          <p>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
            <a href="#">Đây là link ví dụ</a>
          </p>
        </div>
        <div className="footer__bottom--left" />
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright--brand">
          © Bản quyền CyberSoft 2017 - 2019
        </div>
        <div className="footer__copyright--social">
          GET SOCIAL
          <span>
            <i className="fab fa-twitter" />
          </span>
          <span>
            <i className="fab fa-facebook" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
