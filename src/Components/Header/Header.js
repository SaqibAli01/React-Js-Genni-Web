import './Header.css';
import React from 'react'
// import ge from '../../../public/images/images/'

export default function Header() {

  const handelClick = ()=>{
    const element = document.getElementById('SERVICES');
    element.scrollIntoView();
  }

  const handelClickA = ()=>{
    const element = document.getElementById('PRODUCT');
    element.scrollIntoView();
  }

  const handelClickB = ()=>{
    const element = document.getElementById('about');
    element.scrollIntoView();
  }

  const handelClickC = ()=>{
    const element = document.getElementById('form-grid');
    element.scrollIntoView();
  }

  const handelClickD = ()=>{
    const element = document.getElementById('APPS');
    element.scrollIntoView();
  }

  return (<>
  


  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" >
        <img src='Geniie (2).png' alt=''/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav_bar_main" id="navbarNavDropdown">

    
        <div className='nav_bar_one'>
      <ul className="navbar-nav">
        <li className="nav-item" onClick={handelClick}>
          <a className="nav-link" aria-current="page">
          OUR SERVICES
            </a>
        </li>
        <li className="nav-item" onClick={handelClickA} >
          <a className="nav-link" >PRODUCTS</a>
        </li>

        <li className="nav-item" onClick={handelClickB}>
          <a className="nav-link" >ABOUT</a>
        </li>
        <li className="nav-item" onClick={handelClickC}>
          <a className="nav-link">CONTACT US</a>
        </li>
        <li className="nav-item" onClick={handelClickD}>
          <a className="nav-link" >OUR APPS</a>
        </li>
      </ul>
      </div>
     
      <div className='nav_bar_two'>
      <ul className="navbar-nav nav_bar_two">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >
          <button type="button" className="btn btn-outline-primary">BECOME A PARTNER</button>
        
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >
          <button type="button" className="btn btn-outline-primary active">BECOME A RIDER</button>
        
            </a>
        </li>
        </ul>

      </div>


    </div>
  </div>
</nav>


  
  </>  )
}
