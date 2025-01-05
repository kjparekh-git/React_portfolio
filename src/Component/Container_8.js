import React from 'react'

const Container_8 = () => {
    return (
        <>
            <section className="contact section-padding" id="contact" data-scroll-index="6">
                <div className="container">
                    <div className="row justify-contentCenter">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4>Contact us</h4>
                                <h2>Get <span>in touch</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info">
                                <h3>For any Queries and Support</h3>
                                <div className="contact-info-item">
                                    <i className="fa-solid fa-location-arrow"></i>
                                    <h4>Company Location</h4>
                                    <p>Gandhinagar, Gujarat (INDIA)</p>
                                </div>

                                <div className="contact-infoItem">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h4>Write to us at</h4>
                                    <p>kjparekh461@gmail.com</p>
                                </div>

                                <div className="contact-infoItem">
                                    <i className="fa-solid fa-location-arrow"></i>
                                    <h4>Call us on</h4>
                                    <p>+91 94082 27683</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <form method="post" action="" name="contact-form">
                                    <div className="row">
                                        <div class="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="your-name" placeholder="Name" className="form-control">
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" name="your-email" placeholder="Your Email" className="form-control">
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" name="your-number" placeholder="Your Phone" className="form-control">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" id="" placeholder="Your Message" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button className="btn-2" type="submit" value="Submit" id="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Container_8