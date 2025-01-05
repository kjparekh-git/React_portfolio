import React from 'react'

const Home = () => {
    return (
        <div>
            <header className="header-area">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a href="#index.html" className="navbar-brand">K-PAREKH</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><i className="fa-solid fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a href="#home" className="nav-link active" data-scroll-nav="0">home</a></li>
                                <li className="nav-item"><a href="#about" className="nav-link " data-scroll-nav="1">about</a></li>
                                <li className="nav-item"><a href="#services" className="nav-link " data-scroll-nav="2">services</a></li>
                                <li className="nav-item"><a href="#portfolio" className="nav-link " data-scroll-nav="3">portfolio</a></li>
                                <li className="nav-item"><a href="#testimonials" className="nav-link " data-scroll-nav="4">testimonials</a></li>
                                <li className="nav-item"><a href="#contact" className="nav-link " data-scroll-nav="6">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="home" id="home" data-scroll-index="0">
                    <div className="header-content d-flex align-items-center">
                        <div id="parallax">
                            <div className="header-shape shape-one" data-depth="0.10">
                                <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-two" data-depth="0.30">
                                <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-three" data-depth="0.40">
                                <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="image" />
                            </div>

                            <div className="header-shape shape-four" data-depth="0.60">
                                <img src="https://i.postimg.cc/437TqLx6/shape-2.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-five" data-depth="0.20">
                                <img src="https://i.postimg.cc/J7bRR2cK/shape-1.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-six" data-depth="0.15">
                                <img src="https://i.postimg.cc/bNyfpNvN/shape-4.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-seven" data-depth="0.50">
                                <img src="https://i.postimg.cc/9FL5M54P/shape-5.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-eight" data-depth="0.40">
                                <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-nine" data-depth="0.20">
                                <img src="https://i.postimg.cc/sgLkYY4v/shape-6.png" alt="image"  />
                            </div>

                            <div className="header-shape shape-ten" data-depth="0.30">
                                <img src="https://i.postimg.cc/63Cx58RT/shape-3.png" alt="image"  />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="home-text ">
                                        <h4>HELLO, I'M</h4>
                                        <h1>KAMLESH PAREKH</h1>
                                        <p>A Front End Developer & UI-UX Designer</p>

                                        <div className="home-btn">
                                            <a href="#portfolio" className="btn-1">View my Work</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="home-img d-none d-lg-block">
                                        <img src="https://i.ibb.co/BgwwxLD/profile-pic.png" alt="Kamlesh Parekh" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-social">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="header-social-icon">
                                            <ul>
                                                <li><a href="https://www.facebook.com/kamlesh.parekh.927" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="https://x.com/Kamlesh19323506?t=Wy_9NEkv2r9f_HOHX5Wv0w&s=08" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="https://kjparekh-git.github.io/my_portfolio/" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/kj-parekh-b226682aa/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

        </div>
    )
}

export default Home