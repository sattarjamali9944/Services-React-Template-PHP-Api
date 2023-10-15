const Training = () =>
{
  return (
    <div className="features py-5">
  <div className="container-fluid  py-md-3">
    <div className="w3-head-all mb-3">
      <h3>Our Training</h3>
    </div>
    <div className="tabs w3-agileits-tabs">
      
      <ul className="nav nav-tabs" role="tablist">
        <li className="active">
          <a href="#home" aria-controls="home" data-toggle="tab">
            <span>Popular Courses</span>
          </a>
        </li>
        <li>
          <a href="#profile" aria-controls="profile" data-toggle="tab">
            <span>Best Teachers</span>
          </a>
        </li>
        <li>
          <a href="#messages" aria-controls="messages" data-toggle="tab">
            <span>Certification</span>
          </a>
        </li>
        <li>
          <a href="#settings" aria-controls="settings" data-toggle="tab">
            <span>Placements</span>
          </a>
        </li>
      </ul>
      
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active row" id="home">
          <div className="col-lg-6  col-md-12 features-right">
            <div className="agileits-mid">
              <h6>- Our Features</h6>
              <h3> Mauris commodo </h3>
            </div>
            <p>Fusce eget erat nunc. Sed fringilla sem vitae mi interdum commodo. Aliquam neque odio, viverra eget nisl id, vulputate malesuada lorem. Praesent quis ullamcorper lorem vulputate malesuada lorem. </p>
          </div>
          <div className="col-lg-6 col-md-12 features-left agileinfo-img"></div>
          <div className="clearfix"></div>
        </div>
        <div role="tabpanel" className="tab-pane row" id="profile">
          <div className="col-lg-6 col-md-12 features-right">
            <div className="agileits-mid">
              <h6>- Our Features</h6>
              <h3> Mauris commodo </h3>
            </div>
            <p>Fusce eget erat nunc. Sed fringilla sem vitae mi interdum commodo. Aliquam neque odio, viverra eget nisl id, vulputate malesuada lorem. Praesent quis ullamcorper lorem vulputate malesuada lorem. </p>
          </div>
          <div className="col-lg-6 col-md-12 features-left agileinfo-img2"></div>
          <div className="clearfix"></div>
        </div>
        <div role="tabpanel" className="tab-pane row" id="messages">
          <div className="col-lg-6 col-md-12 features-right w3-agile">
            <div className="agileits-mid">
              <h6>- Our Features</h6>
              <h3> Mauris commodo </h3>
            </div>
            <p>Fusce eget erat nunc. Sed fringilla sem vitae mi interdum commodo. Aliquam neque odio, viverra eget nisl id, vulputate malesuada lorem. Praesent quis ullamcorper lorem vulputate malesuada lorem. </p>
          </div>
          <div className="col-lg-6 col-md-12 features-left agileinfo-img3"></div>
          <div className="clearfix"></div>
        </div>
        <div role="tabpanel" className="tab-pane row" id="settings">
          <div className="col-lg-6 col-md-12 features-right">
            <div className="agileits-mid">
              <h6>- Our Features</h6>
              <h3> Mauris commodo </h3>
            </div>
            <p>Fusce eget erat nunc. Sed fringilla sem vitae mi interdum commodo. Aliquam neque odio, viverra eget nisl id, vulputate malesuada lorem. Praesent quis ullamcorper lorem vulputate malesuada lorem. </p>
          </div>
          <div className="col-lg-6 col-md-12 features-left agileinfo-img4"></div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
    
  </div>
</div>

    );
}

export default Training;