import React from 'react'

const Container = () => {
    return (
        <>
            <section className="about-area section-padding" id="about" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <div className="section-title">
                                <h4>About</h4>
                                <h2>Personal <span>Details</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h5 className="about-title">I'm <span>Kamlesh Parekh</span> and I'm a <br/> Front-End Developer, UI-UX Designer</h5>
                                <p className="details">I am a passionate web designer with a love for creating beautiful and functional websites. I enjoy working with HTML, CSS, and JavaScript to bring ideas to life and enhance user experiences. In my free time, I like to explore new design trends and work on personal projects that challenge my creativity</p>

                                <ul>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-calendar"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Date of Birth:</span> 20 September 1973</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Email:</span> kjparekh461@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Phone:</span> +91 94-082-27-683</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-map-marker"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Location:</span> Sector-14, Gandhinagar, Gujarat, India</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-university"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Degree:</span> <abbr title="Higer Secondary School">H.S.C.</abbr> </p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon text-center">
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Website:</span> https://kamleshparekh.in/ </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <a href="#" className="hire-me">Hire me</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 offset-xl-1">
                            <div id="skill-bar-wrapper">
                                <div className="text-left">
                                    <h4>HTML5 <span style={{float:'right'}}>95%</span></h4>
                                    <div className="skillbar-container" data-percent="95%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>CSS3 <span style={{float:'right'}}>95%</span></h4>
                                    <div className="skillbar-container" data-percent="95%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>Javascript <span style={{float:'right'}}>70%</span></h4>
                                    <div className="skillbar-container" data-percent="70%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>JQuery <span style={{float:'right'}}>70%</span></h4>
                                    <div className="skillbar-container" data-percent="70%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>React JS <span style={{float:'right'}}>65%</span></h4>
                                    <div className="skillbar-container" data-percent="65%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>Figma / Illustrator / Photoshop <span style={{float:'right'}}>90%</span></h4>
                                    <div className="skillbar-container" data-percent="80%">
                                        <div className="skills"></div>
                                    </div>

                                    <h4>After Effect / Premier Pro <span style={{float:'right'}}>70%</span></h4>
                                    <div className="skillbar-container" data-percent="70%">
                                        <div className="skills"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Container