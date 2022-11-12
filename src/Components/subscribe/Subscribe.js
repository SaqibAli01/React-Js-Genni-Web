import React from 'react'
import './subc.css'
export default function Subscribe() {
    return (<>

        <div class="news-letter">
            <div class="container text-center">
                <div class="row">
                    <div class="col-0 col-xs-0 col-sm-0 col-md-0 col-lg-2 col-xl-2 col-xxl-2">
                    </div>
                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                        <h3>subscribe to our newsletter</h3>
                        <p>stay up to date with our latest news and products. Don't worry your email is safe.
                        </p>
                    </div>
                    <div class=" col-0 col-xs-0col-sm-0 col-md-0 col-lg-2 col-xl-2 col-xxl-2">
                    </div>
                </div>
            </div>
            <div class="container text-center ">
                <div class="row email-section">
                    <div class="col-0 col-xs-0 col-sm-0 col-md-1 col-lg-2 col-xl-2 col-xxl-2">
                    </div><div class="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="text" class="form-control email-data"
                            placeholder="Enter your Email" aria-label="Email" />
                        <button type="button" class="btn btn-primary btn-lg merge-button">
                            Subscribe</button>
                    </div>
                    <div class="col-0 col-xs-0 col-sm-0 col-md-1 col-lg-2 col-xl-2 col-xxl-2">
                    </div></div></div><div class="container responsive-email-section">
               
            </div>
        </div>




    </>
    )
}
