import * as Yup from "yup";
//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const UpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.number().min(10,"Must be number 10").positive('Enter Only number').integer('Enter Only number').required('Enter your phone number pattern is 03330939019'),
  service:Yup.string().required('Service Must be required'),  

});


export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password:Yup.string().required('Password Must be required'),  

});