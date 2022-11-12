import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function NewSlider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="App">

            <div className="row col-12" style={{ position: "relative" }}>
                <Carousel responsive={responsive}>

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Food Order Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Food Order</strong></h3>
                    </div>

                    {/* image two  */}
                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Health Care Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Health Care</strong></h3>

                        </div>
                    {/* image 3  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Hair Saloon Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Hair Saloon</strong></h3></div>
                    {/* image 4  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Cleaning Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Cleaning</strong></h3></div>

                    {/* image 5  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Pet Care hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Pet Care</strong></h3></div>

                    {/* image 6  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Barber Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Barber</strong></h3></div>
                    {/* image 7  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Cleaning Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Cleaning</strong></h3></div>
                    {/* image 8  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Food Order Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Pet Care</strong></h3></div>
                    {/* image two  */}

                    <div className="w_fit">
                        <div className="container1 geeks">
                            <img src="Cleaning Hover.png" alt="Avatar" className="image" style={{ width: "100%" }} />
                            <div className="middle">
                                <div className="text">Comming Soon!</div>
                            </div>
                        </div>
                        <h3> <strong>Cleaning</strong></h3></div>
                </Carousel>
            </div>
        </div>
    );
}
