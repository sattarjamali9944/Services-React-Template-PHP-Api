import { useState } from 'react';
import { useFormik } from "formik";
import { UpSchema } from "../../schemas/Appointment";
import axios from "axios";
const ContactMain = () => {
  const [msg,Setmg] = useState(0);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: UpSchema,
      onSubmit: (values, action) => {
       axios.post('http://localhost/api/add_appointement.php', values)
            .then((res) => {
                console.log(res.data)
                Setmg(res.data.msg);
            }).catch((error) => {
                console.log(error)
            });
        action.resetForm();
      },
    });

  return (
    <>
      <section className="innerpage_banner py-5">
        <div className="dot1"></div>
      </section>

      <div className="mail py-5" id="contact">
        <div className="container-fluid  py-md-3">
          <div className="w3-head-all mb-3">
            <h3>Contact Us</h3>
          </div>
          <div className="w3-agile_info row">
            <div className="col-lg-4 col-sm-6 col-xs-12 mail-agileits-w3layouts">
              <i className="fas fa-mobile-alt" aria-hidden="true"></i>
              <div className="contact-right">
                <p>Phone</p>
                <span>+1 (100)222-23-33</span>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 mail-agileits-w3layouts">
              <i className="far fa-envelope" aria-hidden="true"></i>
              <div className="contact-right">
                <p>Email</p>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 mail-agileits-w3layouts mail-agileits-w3layouts1">
              <i className="fas fa-map-marker" aria-hidden="true"></i>
              <div className="contact-right">
                <p>Address</p>
                <span>7784 Diamonds street, California, US.</span>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 map ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359195.17562375!2d-113.7156245614499!3d36.2473834534249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1452332634941"></iframe>
            </div>
            <div className="col-lg-5 mail-grid1-form ">
              <h3 className="tittle-w3">
                <span>Send a </span>Message
              </h3>
              {(msg!='' || msg!='' )?
              <div className='alert alert-success'>{msg}</div>:''}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
                <input
                  className="form-control"
                  placeholder="Enter Email"
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <p className="form-error">{errors.phone}</p>
                ) : null}
                <textarea
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Message...."
                  required=""
                ></textarea>
                {errors.service && touched.service ? (
                  <p className="form-error">{errors.service}</p>
                ) : null}

                <input type="submit" value="Submit" style={{cursor: "pointer"}} />
              </form>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
