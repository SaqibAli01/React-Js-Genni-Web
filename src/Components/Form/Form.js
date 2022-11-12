import React from 'react';
import './Form.css';
export default function Form() {
    return (<>




        <div id="form-grid" className="form-grid" >
           
                <div className="row ">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                        <p className="h1 form-heading">how to work with us</p>
                        <p className="form-para">
                            Complete this form and we will get back to you in 24 hours.
                        </p>
                    </div>

                    <div className="animationGrid anis col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 h11 transition">
                        <div className="form-area" style={{opacity: "1", transform: "none"}}>
                            <div className="mb-3 name-area">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Full name
                                </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Enter your name" />
                            </div><div className="mb-3 email-area">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control"
                                    id="exampleFormControlInput1" placeholder="Enter email address" />
                            </div><div className="mb-3 message-area">
                                <label for="exampleFormControlTextarea1" className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                    rows="8" placeholder="Type message in your own words">
                                </textarea>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto button-cust">
                                <button className="btn btn-lg" type="button">
                                    send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
         
        </div>










    </>)
}
