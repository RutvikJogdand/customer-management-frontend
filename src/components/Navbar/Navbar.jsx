import React, { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {

  const [tabIndex, setTabIndex] = useState(0);
  const [accordian, setAccodian] = useState(false)

  const handleFocus = (tabIndex) => {
    setTabIndex(tabIndex);
  }

  const handleMouseLeave = () => {
    setTabIndex(0);
  }

  const handleAccordian = () => {
    setAccodian(!accordian);
  }
  return (
    <>
        <nav className="navbar box-shadow p-3 navbar-expand-lg navbar-white bg-white">
        <a className="navbar-brand" href="#">
            <img src={require("../../assets/main-logo.png")} height={30} alt=''/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">

            <img src={require("../../assets/burger-menu.png")} height={20} alt='' />
            </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
            <a className="nav-item nav-link active" href="#">What's New <span className="sr-only">(current)</span></a>

            <div className="accordion" id="accordionExample">
                <button onClick={handleAccordian} className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Knowledge Hub {accordian ?<i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i>}
                </button>
            </div>


            <a className="nav-item nav-link" href="#">CB News</a>
            <a className="nav-item nav-link" href="#">Internship</a>
            <a className="nav-item nav-link" href="#">About Us</a>
            </div>
            <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#">Login</a> &nbsp; &nbsp;
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
                            <a href="#" class="icon-button facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="icon-button twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="icon-button instagram"><i class="fab fa-instagram"></i></a>

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
                        <img src={require("../../assets/banner.png")} height={250}/>
                    </div>
                </div>
            </div>
        </div> 

        <div className='content-box'>
            <section className='text-container'>
                <p>Explore</p>
                <p>Upskill</p>
                <p>Elevate</p>
            </section>
            <section className='images-container'>
                {/* Images */}
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(0)} onMouseOver={() => handleFocus(0)} className={` ${tabIndex === 0 ? 'active-tab' : 'inactive-tab'} image-container-one`}>
                    <p className={`${"img-text"}`}> <div className='circle-div'></div> <div className='text-value'> Masterclass </div></p>
                    <div className='subtext'>Real-world learnings from the best.</div>  
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(1)}  onMouseOver={() => handleFocus(1)} className={`  ${tabIndex === 1 ? 'active-tab' : tabIndex === 2 && 'second-inactive-tab'} image-container-two`}>
                    <p className={`${"img-text"}`}>  <div className='circle-div'></div> <div className='text-value'> Webinar </div></p>
                    <div className='subtext'>Learn industry relevant skills online.</div>
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(2)} onMouseOver={() => handleFocus(2)} className={`  ${tabIndex === 2 ? 'active-tab' : 'third-inactive-tab'} image-container-three`}>
                    <p className={`${"img-text"}`}>  <div className='circle-div'></div> <div className='text-value'> Podcast </div></p>
                    <div className='subtext'>Learn industry trends from experts.</div>
                </div>

            </section>
            <section className='discover-more'>
                <button>Discover Now </button>
            </section>
        </div>
    </>
  )
}
