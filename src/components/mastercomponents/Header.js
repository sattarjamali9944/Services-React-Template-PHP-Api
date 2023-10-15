import {useEffect,useState} from 'react';
import {NavLink ,Link } from 'react-router-dom';
import axios from 'axios';

const  Header = () =>
{
	
	const [services,setService]=useState([]);
	useEffect(()=>{
		getServices();
	},[]);

    function getServices ()
    {
    	try{
    	axios.get('http://localhost/api/services_list.php').then((res)=>{
    		console.log(res.data)
    		setService(res.data);

    	}).catch((err)=>{
    		console.log(err);
    	});
     }
     catch(err){
     	console.log(err)
     }
    }
	var user_id =localStorage.getItem('loginToken');

	
	return(
			 <header>
		        <div className="top-nav">
		          <div className="container-fluid">
		            <nav className="navbar navbar-expand-lg navbar-light">
		              <NavLink className="navbar-brand text-uppercase" to="/">Success path <i className="fab fa-studiovinari"></i></NavLink>
		              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		              <span className="navbar-toggler-icon"></span>
		              </button>
		              <div className="collapse navbar-collapse justify-content-center pr-md-4" id="navbarSupportedContent">
		                <ul className="navbar-nav ml-auto">
		                  <li className="nav-item ">
		                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
		                  </li>
		                  <li className="nav-item">
		                    <NavLink className="nav-link" to="/about">About</NavLink>
		                  </li>
		                  <li className="dropdown nav-item">
							<a href="#" className="dropdown-toggle nav-link" 
							data-toggle="dropdown">Services
								<b className="caret"></b>
							</a>
							<ul className="dropdown-menu agile_short_dropdown">
								{services.map((index,key)=> (
								
								<li key={index.id}>
									<NavLink to="/services">{index.service_name}</NavLink>
								</li>
							))}
								
							</ul>
						</li>
		                  <li className="nav-item">
		                    <NavLink className="nav-link" to="/services">Services</NavLink>
		                  </li>
		                  <li className="nav-item">
		                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
		                  </li>
		                  
		                  <li className="nav-item">
		                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
		                  </li>
		                  <li className="nav-item">{(user_id !='' && user_id != null && user_id 
		                  != 'undefined')?
		                  null
		                 :
		                    <NavLink className="nav-link" to="/login">Login</NavLink>}
		                 
		                  </li>
		                  {(user_id !='' && user_id != null && user_id != 'undefined')?
		                  <li className="dropdown nav-item">
							<a href="#" className="dropdown-toggle nav-link" 
							data-toggle="dropdown">Profile
								<b className="caret"></b>
							</a>
							<ul className="dropdown-menu agile_short_dropdown">
								<li>
									<NavLink to="/profile">Profile</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Logout</NavLink>
								</li>
							</ul>
						</li>:null}

						
		                </ul>
		              </div>
		            </nav>
		          </div>
		        </div>
		      </header>
		  );   
}

export default Header;