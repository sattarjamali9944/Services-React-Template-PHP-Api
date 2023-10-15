import {NavLink} from 'react-router-dom';

const Footer = () =>{


	return (
		<>
		<section className="agile-footer w3ls-section py-5">
  <div className="container">
    <div className="list-footer">
      <ul className="footer-nav text-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <div className="agileits_w3layouts-footer-bottom">
      <div className="row w3_agile-footer-grids py-5 my-4">
        <div className="col-lg-3 col-sm-12 w3_agile-footer1 f1">
          <h2 className="mb-3">
            <NavLink to="index.html">Success path</NavLink>
          </h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem atus error sit volupt unde.</p>
        </div>
        <div className="col-lg-7 col-sm-12 row w3_agile-footer1 f2">
          <div className="col-lg-4  col-sm-4 inner-li">
            <h5 className="mb-3">Partners</h5>
            <ul className="w3ls-footer-bottom-list">
              <li>
                <NavLink className="page-scroll" to="/services">Our Group</NavLink>
              </li>
              <li>
                <NavLink className="page-scroll" to="/tr">Training</NavLink>
              </li>
              <li>
                <NavLink className="page-scroll" to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink className="page-scroll" to="">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 inner-li">
            <h5 className="mb-3">About us</h5>
            <ul className="w3ls-footer-bottom-list">
              <li>
                <NavLink to="/about">History</NavLink>
              </li>
              <li>
                <NavLink to="#">Terms of use</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy policy</NavLink>
              </li>
              <li>
                <NavLink to="#">Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 inner-li">
            <h5 className="mb-3">support</h5>
            <ul className="w3ls-footer-bottom-list">
              <li>
                <NavLink to="#">24/7 service</NavLink>
              </li>
              <li>
                <NavLink to="#">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="#">media</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4  w3_agile-footer1 f3">
          <h5 className="mb-3">Need Help?</h5>
          <ul className="footer-social-icons">
            <li>
              <NavLink to="/contact"> Contact us </NavLink>
            </li>
            <li>
              <NavLink to="#"> Careers </NavLink>
            </li>
            <li>
              <NavLink to="#"> Success </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="agileits_w3layouts-copyright text-center">
      <p>© 2018 Success path. All Rights Reserved | Design by <NavLink to="http://w3layouts.com/" target="=_blank"> W3layouts </NavLink>
      </p>
    </div>
  </div>
</section>  
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-uppercase text-center" id="exampleModalLongTitle"> Success path</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <img src="assets/images/ban11.jpg" className="img-fluid mb-3" alt="Modal Image" /> Vivamus eget est in odio tempor interdum. Mauris maximus fermentum arcu, ac finibus ante. Sed mattis risus at ipsum elementum, ut auctor turpis cursus. Sed sed odio pharetra, aliquet velit cursus, vehicula enim. Mauris porta aliquet magna, eget laoreet ligula.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>

)




	



}

export default Footer;