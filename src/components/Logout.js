import {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
const Logout = () =>
{

 var user_id =localStorage.getItem('loginToken');
 const navigate = useNavigate();
 

 useEffect(()=>{
 if(user_id !== null &&  user_id !== 'undefined' && user_id !== '' ){	
 localStorage.clear();
 navigate('/');
}else
	{ 
		console.log('Token is empgty');
		navigate('/');

	
}

},[]);

}



export default Logout;