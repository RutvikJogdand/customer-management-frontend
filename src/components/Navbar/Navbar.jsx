import React, { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleFocus = (tabIndex) => {
    setTabIndex(tabIndex);
  }

  const handleMouseLeave = () => {
    setTabIndex(0);
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
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Knowledge Hub
                </button>
            </div>


            <a className="nav-item nav-link" href="#">CB News</a>
            <a className="nav-item nav-link" href="#">Internship</a>
            <a className="nav-item nav-link" href="#">About Us</a>
            </div>
            <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#">Login</a>
            <button className="nav-item btn btn-primary" type="button">Register Now</button>
            </div>
        </div>
        </nav>
        <div>
            {/* <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                </h5>
            </div> */}

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
                    <p className={`${"img-text"}`}>Masterclass</p>
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(1)}  onMouseOver={() => handleFocus(1)} className={`  ${tabIndex === 1 ? 'active-tab' : tabIndex === 2 && 'second-inactive-tab'} image-container-two`}>
                    <p className={`${"img-text"}`}>Webinar</p>
                </div>
                <div  onMouseLeave={handleMouseLeave} onTouchStart={() => handleFocus(2)} onMouseOver={() => handleFocus(2)} className={`  ${tabIndex === 2 ? 'active-tab' : 'third-inactive-tab'} image-container-three`}>
                    <p className={`${"img-text"}`}>Podcast</p>
                </div>

            </section>
            <section className='discover-more'>
                <button>Discover Now </button>
            </section>
        </div>
    </>
  )
}
