import { testimonial1 } from "@/assets";
import "./Tsetimonials.css";
import { client, urlFor } from "@/client";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"][0..2]';
    let ignore = false;

    client.fetch(query).then((data) => {
      if (ignore) return;
      setTestimonials(data);
    });

    return () => (ignore = true);
  }, []);

  return (
    <section id="testimonials" className="testimonials dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial._id}>
              <img src={urlFor(testimonial.image)} />
              <div className="reviewer-details">
                <div className="name">{testimonial.name}</div>
                <div className="company-name">{testimonial.company}</div>
                <div className="review">{testimonial.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
