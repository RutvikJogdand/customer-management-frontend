import React, { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {

  const [tabIndex, setTabIndex] = useState(0);
  const [accordian, setAccodian] = useState(false)
  const [login, setLogin] = useState(false);

  const handleFocus = (tabIndex) => {
    setTabIndex(tabIndex);
  }

  const handleMouseLeave = () => {
    setTabIndex(0);
  }

  const handleAccordian = () => {
    setAccodian(!accordian);
  }

  const handleLogin = () => {
    setLogin(true);
  }

  const handleLogout = () => {
    setLogin(false)
  }
  return (
    <>
        <nav className="navbar box-shadow p-3 navbar-expand-lg navbar-white bg-white">
        <a className="navbar-brand" href="#">
            <img src={require("../../assets/main-logo.png")} height={30} alt=''/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            {
                accordian?
                <img /*data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"*/ src={require("../../assets/burger-menu.png")} height={20} alt='' />
                :
                <img  src={require("../../assets/burger-menu.png")} height={20} alt='' />

            }
            </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
            <a className="nav-item nav-link active">What's New <span className="sr-only">(current)</span></a>

            <div className="accordion" id="accordionExample">
                <button onClick={handleAccordian} className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Knowledge Hub {accordian ?<i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i>}
                </button>
            </div>


            <a className="nav-item nav-link">CB News</a>
            <a className="nav-item nav-link">Internship</a>
            <a className="nav-item nav-link">About Us</a>
            </div>
            <div className="navbar-nav ml-auto">
            {
                !login ?
                <><a className="nav-item nav-link" onClick={handleLogin}>Login</a> &nbsp; &nbsp; </>
                :
                <>
                <div className="dropdown">
                    <div className="pt-2 dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        My Account
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item"> <i className='fa fa-receipt'></i> Purchase history</a></li>
                        <li><a className="dropdown-item"> <i className='fa fa-video'></i> Video stream</a></li>
                        <li><a className="dropdown-item"> <i className="fa fa-bell"></i> Notifications</a></li>
                        <li><a className="dropdown-item"> <i className="fa fa-tools"></i> Settings</a></li>
                        <li><a className="dropdown-item" onClick={handleLogout}> <i className="fa fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </div>  &nbsp; &nbsp;  &nbsp; &nbsp;
                </>
            }    
            <button className="nav-item btn register-now" type="button">Register Now</button>
            </div>
        </div>
        </nav>
        <div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card accordian-content-container">
                    <div>
                        <p className='cta-main'>Join our registration list</p>
                        <p className='cta-helper'>And receive updates, expert educational insights, and early access to our platform</p>

                        <div>
                            <button className='join-button'>Join</button> &nbsp;
                            <span className="icon-button facebook"><i className="fab fa-facebook-f"></i></span>
                            <span className="icon-button twitter"><i className="fab fa-twitter"></i></span>
                            <span className="icon-button instagram"><i className="fab fa-instagram"></i></span>
                            <span className="icon-button instagram"><i className="fab fa-whatsapp"></i></span>
                            <span className="icon-button instagram"><i className="fa fa-envelope"></i></span>
                        </div>
                    </div>
                    <div className='selling-products-list-container'>
                        <ul className='selling-products-list'>
                            <li>Masterclass</li>
                            <li>Webinar</li>
                            <li>CB Connect</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <img className='img-fluid' src={require("../../assets/banner.png")} height={200}/>
                    </div>
                </div>
            </div>
        </div> 

        <div className='content-box'>
            <section className='text-container'>
                <p>Explore.</p>
                <p>Upskill.</p>
                <p>Elevate.</p>
            </section>
            <section className='images-container'>
                {/* Images */}
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(0)} onMouseOver={() => handleFocus(0)} className={` ${tabIndex === 0 ? 'active-tab' : 'inactive-tab'} image-container-one`}>
                    <p className={`${"img-text"}`}> <div style={{background:"#F18F01"}} className='circle-div'></div> <div className='text-value'> Masterclass </div></p>
                    <div className='subtext'>Real-world learnings from the best.</div>  
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(1)}  onMouseOver={() => handleFocus(1)} className={`  ${tabIndex === 1 ? 'active-tab' : tabIndex === 2 && 'second-inactive-tab'} image-container-two`}>
                    <p className={`${"img-text"}`}>  <div style={{background:"115D98"}} className='circle-div'></div> <div className='text-value'> Webinar </div></p>
                    <div className='subtext'>Learn industry relevant skills online.</div>
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(2)} onMouseOver={() => handleFocus(2)} className={`  ${tabIndex === 2 ? 'active-tab' : 'third-inactive-tab'} image-container-three`}>
                    <p className={`${"img-text"}`}>  <div style={{background:"#147B85"}} className='circle-div'></div> <div className='text-value'> Podcast </div></p>
                    <div className='subtext'>Learn industry trends from experts.</div>
                </div>

            </section>
            <section className='discover-more'>
                <button>Discover Now  <i className='fa fa-arrow-right'></i> </button>
            </section>
        </div>
    </>
  )
}
