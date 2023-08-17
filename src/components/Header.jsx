const Header = ()=>{
    return(
        <>
        <nav className="navigation d-flex justify-content-center align-items-center bg-darkblue1">
        <div className="col-6">
            <p className="small-t text-light m-0 ps-5">A Multi-Concept Theme for Digital Agencies and Startups</p>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
            <a href="#" className="text-decoration-none text-light small-t px-3">Support</a>
            <a href="#" className="text-decoration-none text-light small-t px-3">FAQ</a>
            <i className="bi bi-twitter text-light px-2 small-t"></i>
            <i class="bi bi-facebook text-light px-2 small-t"></i>
            <i class="bi bi-linkedin text-light px-2 small-t pe-5"></i>
        </div>
    </nav>

    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
            <div className="container-fluid">
                <a className="navbar-brand ps-3" href="#"> 
                    <img src="https://foton.qodeinteractive.com/wp-content/uploads/2018/07/logo1.png" width={104}/>
                </a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-lg-0 d-flex justify-content-end align-items-center">
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link f-main f-weight text-uppercase" >
                                <span className="name">Home</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link f-main f-weight text-uppercase" >
                            <span className="name">Pages</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link f-main f-weight text-uppercase">
                            <span className="name">Portfolio</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link f-main f-weight text-uppercase" >
                            <span className="name">Blog</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link f-main f-weight text-uppercase">
                            <span className="name">shop</span>
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link f-main f-weight text-uppercase">
                            <span className="name">Elements</span>
                            </a>
                        </li>
                    </ul>
                    <a href="#"><i class="bi bi-cart-fill h6"></i></a>
                    <a href="#"><i class="bi bi-search px-3 me-2 h6"></i></a>
                    <button className="btn" type="button"> <i class="bi bi-justify-right text-white h5"></i></button>
                </div>
            </div>
        </nav>
    </header>

        </>
    )
}
export default Header;