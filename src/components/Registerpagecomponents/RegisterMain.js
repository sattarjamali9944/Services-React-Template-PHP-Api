import { useState } from 'react';
import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas/Appointment";
import axios from "axios";
import {NavLink,Link,useNavigate} from 'react-router-dom';
import Loader from "../Loader";
const RegisterMain = () => {
  const [msg,Setmg] = useState(0);
  const [loading,Setloading]=useState(false);
  const [classCss,Setclass]=useState('alert alert-success')
  const navigate = useNavigate();
  const initialValues = {
    name:"",
	email: "",
    password: "",
    
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values, action) => {
	  Setloading(true);  
       axios.post('http://localhost/api/register.php', values)
            .then((res) => {
                if(res.data.success === 0){
                 Setmg(res.data.message); 
                 Setloading(false);
                 Setclass('alert alert-danger'); 
                } 
                else if(res.data.success === 1){             
                localStorage.setItem('loginToken', res.data.user_id);
                console.log(localStorage.getItem('loginToken'));
                navigate('/profile');
                action.resetForm();
               }
                }).catch((error) => {
                console.log(error)
            });
        
      },
    });

  return (
    
    <>
	     
		 <section className="innerpage_banner py-5">
            <div className="dot1"></div>
          </section>
        {loading  ? (<Loader />):
     
     (
     <>
        <div className="mail py-5" id="contact">
          <div className="container-fluid  py-md-3">
            <div className="w3-head-all mb-3">
              <h3>Register Here</h3>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4"></div>
               
                <div className="col-lg-5">
                    <div className="col-lg-12 mail-grid1-form ">
                  {(msg!='')?
                  <div className={classCss}>{msg}</div>:''}
                  <form onSubmit={handleSubmit}>
				   <input
                      className="form-control" 
                      type="text"
                      type="text"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
					{errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                    <input
                      className="form-control" 
                      type="text"
                      type="text"
                      autoComplete="off"
                      name="email"
                      id="name"
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                    <br />
                    <input
                      className="form-control"
                      placeholder="Enter Your Password"
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="email"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                      ) :( null)
                  }
                   
                    <br />
                    <input type="submit" value="Login Here" style={{cursor: "pointer"}} />
                  </form>
				  <Link to="/login" className='primary'>Login</Link>
                </div>
                </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
		  
		  </>

         
         
      )}
      
    </>
  );
};

export default RegisterMain;
