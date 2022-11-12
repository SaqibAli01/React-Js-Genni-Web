import React from 'react';
import './GridThree.css';

export default function GridThree() {
    return (<>


        {/* grid one copy  */}
        <div className='container' id='about'>
            <div className="row intro-geniie">

                <div className="row reverse">
                <div className="col-10 col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 fancy-image">
                        <div className="image-background">
                             </div>
                            {/* <img src ='crop-circle.png'/> */}
                        <div className="ImageDiv">
                            <img src="App.png" className="AppImg" alt="Application" />
                        </div>
                       
                    </div>
                    
                    <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5" style={{ margin: "auto" }}>
                        <div className="app-container">
                            
                            <p className="h1">
                                Let
                                <strong style={{ color: '#01a1e8;' }}> Geniie </strong>
                                welcome you to a whole new world.</p>

                            <p className="app-decription">
                            Geniie Enables customers to book their required service in a single tap whenever they want.
                            Get paid by using one of our many payment options integrated within the app.
                            <br />Geniie enables customers to communicate with online through our live chat
                            and 24/7 customer service helpline which provides a personalized experience
                            without facing any issues in whatever they require.

                            </p>
                            <div className='QrTwo'>
                            <img src="QR.png" type="image" alt="QR-Codes" className="QR" />

                            </div>

                        </div>
                    </div>
                    
                </div>





            </div>
        </div>

        {/* end grid one copy  */}


    </>)
}
