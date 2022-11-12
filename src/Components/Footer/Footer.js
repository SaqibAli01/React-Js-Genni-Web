import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>

            <div class="last-intro">
                <div class="container text-center">
                    <div class="row footerimg">
                        {/* <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
                        </div> */}
                        <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                            <img class="company-logo" src='Geniie (2).png' />
                        </div>
                    </div>
                </div>
                <p class="last-para">2 St. Edmunds Road GATESHEAD NE8 4AX</p>


                <div class="icons_flex">
                    <a href="https://www.facebook.com/"
                        target="_blank" rel="noreferrer">
                        <img src="linkedIn.png" class='icon_link' />
                    </a>

                    <a href="https://www.linkedin.com/company/geniie/about/"
                        target="_blank" rel="noreferrer">
                        <img src="twitter.png" class='icon_link' />
                    </a>

                    <a href="https://www.facebook.com/"
                        target="_blank" rel="noreferrer">
                        <img src="fb.png" class='icon_link' />
                    </a>
                </div>
            </div>

            <div class="container text-center border-top copyright-grid">
                <div class="row copyright-grid">
                    <div class="col-0 col-xs-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4">
                    </div>
                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <h5>Copyright
                            <i class="bi bi-c-circle"></i>
                            2022 By Geniie creative team</h5>
                    </div>
                    <div class="col-0 col-xs-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4">
                    </div></div></div>

        </>
    )
}
