import React from "react";
import Form from "../Form/Form";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__content">
        <h2 className="carousel__title">Học bất cứ đâu!</h2>
        <p>
          Giá rẻ bất ngờ. 10 đồng 1 khóa, 10 đồng 1 khóa, quẹo lựa quẹo lựa...
        </p>
        <div className="input">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Bạn muốn học gì ?"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
