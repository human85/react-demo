import { testimonial1 } from "../../assets";
import "./Tsetimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial1} />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial1} />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
