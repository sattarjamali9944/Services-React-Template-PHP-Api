import {useState} from 'react';
import { useFormik } from "formik";
import { UpSchema } from "../../schemas/Appointment";
import axios from "axios";

const Appointment = () => {

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
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
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
    <div className="appointment" id="appointment">
      <div className="container-fluid  py-md-3">
        <div className="row">
          <div className="col-md-5 about-bottoml-agileits"></div>
          <div className="col-md-7 about-bottomr-agileits">
            <div className="appointment_head">
              <h3>Make An Appointment </h3>
            </div>
            <div className="form-agileits">{(msg!='')?
              <div className='alert alert-success'>{msg}</div>:''}
              <form onSubmit={handleSubmit}>
                <h6>Personal information</h6>
                <input
                  className="form-control"
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
                <div className="clearfix"> </div>
                <h6>Service and date</h6>
                <select
                  className="form-control"
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Please Select Your Service</option>
                  <option value="Post-recovery">Post-recovery</option>
                  <option value="Post-Trauma">Post-Trauma</option>
                  <option value="Migraines">Migraines</option>
                  <option value="Chronic Pains">Chronic Pains</option>
                </select>
                {errors.service && touched.service ? (
                  <p className="form-error">{errors.service}</p>
                ) : null}

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
