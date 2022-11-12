import React from 'react';
import './GridFour.css'

export default function GridFour() {
    return (<>
        <div className='container' id='APPS'>
            <div class="row ">
                <div class="col-0 col-xs-0 col-sm-0 col-md-0 col-lg-2 col-xl-2 col-xxl-2 ">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div class="welcome-para">
                        <h1 class="decoration">
                            <p class="brand-name">
                                Explore and Download  Geniie     Apps

                            </p>
                        </h1>
                    </div>
                </div>
                <div class=" col-0 col-xs-0 col-sm-0 col-md-0 col-lg-2 col-xl-2 col-xxl-2">
                </div>
            </div>



            {/* grid  */}

            <div class="container">
                <div class="row ani disFlex ">
                    <div class="ani col-12 col-xs-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 responsive-card-margin">
                        {/* card  */}

                        <div class="card mb-3 shadow" >
                            <div class="row g-0 reversFlex">
                                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 lineHig">
                                    <div class="card-body">
                                        <h1 class="card-title">1.</h1>
                                        <h3 class="Services">Restaurants</h3>
                                        <p class="card-text">
                                            Don’t stand in line to order food, find deals and many more from our restaurant partners.
                                        </p>
                                        <div class='imageCenter MtCenter'>

                                            <img class="imgs" src='GooglePlay.png' />
                                            <p></p>
                                            <img class="imgs" src='GooglePlay.png' />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-5 mt-5 imageCnter newCls">
                                    <img src="app.png" class="img-fluid rounded-start imageSize" alt="..." />

                                    
                                </div>

                            </div>
                        </div>

                        {/* card end  */}
                    </div>

                    {/* card right side   */}
                    <div class=" ani col-12 col-xs-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 responsive-card-margin">
                        {/* copy code  */}

                        <div class="card mb-3 shadow" >
                            <div class="row g-0 reversFlex">
                                <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 lineHig">
                                    <div class="card-body">
                                        <h1 class="card-title">1.</h1>
                                        <h3 class="Services">Restaurants</h3>
                                        <p class="card-text">
                                            Don’t stand in line to order food, find deals and many more from our restaurant partners.
                                        </p>
                                        <div class='imageCenter'>

                                            <img class="imgs" src='GooglePlay.png' />
                                            <p></p>
                                            <img class="imgs" src='GooglePlay.png' />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-5 mt-5 imageCnter newCls">
                                    <img src="app.png" class="img-fluid rounded-start imageSize" alt="..." />
                                </div>

                            </div>
                        </div>

                        {/* end code  */}
                    </div>
                </div>
            </div>
        </div>





        {/* Grid end  */}




        {/* new grid  */}



    </>

    )
}
