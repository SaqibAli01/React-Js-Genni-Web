import React from 'react'
import './GridOne.css'
export default function GridsOne() {
    return (<>
     

        {/* grid two  */}

     <div className='container' id='about'>
            <div className="row intro-geniie">

            <div className="row">
                <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5" style={{margin: "auto"}}>
                    <div className="app-container">
                        {/* <p className="h1" style={{textAlign: "left;"}}>
                        Let Geniie welcome you to a whole new world
                    </p> */}
                    <p className="h1">
                            Why
                            <strong style={{color: '#01a1e8;'}}> Geniie </strong>
                            is all you need?</p>

                        <p className="app-decription">
                            Multiple services in one hand? Yes. An App that allows you to book any services at
                             any location whenever you want. Geniie is the best-in-className platform that connects
                              range of service providers with the customers in the digital world. This includes
                               food ordering, Taxi service, delivery services, electricians, plumbers, gardeners,
                                party organizers and other mobile services etc.

                        </p>
                        
                    </div>
                </div>
                <div className="col-10 col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 fancy-image">
                    {/* <div className="image-background"> </div> */}
                    <div className="text-center  image-tilt">
                        <img src="Geniie.png" className="rounded app-display" alt="Application"/>
                    </div>
                </div>
            </div>



               

            </div>
            </div>
     


    </>)
}
