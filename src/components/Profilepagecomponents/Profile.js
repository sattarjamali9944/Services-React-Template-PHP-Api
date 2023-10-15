
import {useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Profile = () =>
{

 const [profile,setProfile]=useState([]); 
 var user_id =localStorage.getItem('loginToken');
 const values={user_id:user_id};
useEffect(()=>{
 axios.get(`http://localhost/api/profile.php?id=${user_id}`).then((res)=>{
 	setProfile([res.data]);
 	 console.log(res.data);
 })
 .catch((error)=>{
 	console.log(error);
 }
 )},[]);

return(
	<>
	<section className="innerpage_banner py-5">
        <div className="dot1"></div>
    </section>
    
    <div className="mail py-5" id="contact">
     <div className="container-fluid  py-md-3">
          <div className="w3-head-all mb-3">
            <h3>Contact Us</h3>
          </div>
	<div>
	<div className='container'>
	 {profile.map((profiles, key) => (
								<ul key={key}>
									<li>{profiles.id}</li>
									<li>{profiles.username}</li>
									<li>{profiles.full_name}</li>
									<li>{profiles.email}</li>
									
								</ul>
			))}
	 </div>
	</div>
	</div>
	</div>

</> );
 
 

 

}



export default Profile;