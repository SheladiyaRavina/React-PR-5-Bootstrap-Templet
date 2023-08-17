const Footer = ()=>{
    return(
        <>
        <footer className="bg-darkblue1 p-top">
        <div className="container">
            <div className="row">
                <div className="foot row pb">
                    <div className="col-12 col-lg-6 col-xl-3 pt-xs-3 pt-xl-0">
                        <h2 className="text-light">foton</h2>
                        <p className="text-light pt-2">Lorem ipsum dolor sit amet, consy ect etur adipisc de elit. Quisque act
                            raqum nunc no dolor sit de amet.</p>
                            <div className="d-flex pt-3">
                                <div className="f-icon text-center me-3"><a href="#"><i className="bi bi-twitter"></i></a></div>
                                <div className="f-icon text-center me-3"><a href="#"><i class="bi bi-facebook"></i></a></div>
                                <div className="f-icon text-center me-3"><a href="#"><i class="bi bi-google"></i></a></div>
                            </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <h4 className="h4 text-light mb-3">Contact Info</h4>
                        <ul className="list-unstyled">
                            <li className="py-2">
                                <a href="#" className="text-decoration-none"><i className="bi bi-geo-alt me-2"></i>113 Fulton Street, Suite 721</a>
                            </li>
                            <li className="py-2">
                                <a href="#" className="text-decoration-none"><i className="bi bi-pin-fill me-2"></i>New York, NY 10010</a>
                            </li>
                            <li className="py-2">
                                <a href="#" className="text-decoration-none"><i className="bi bi-envelope me-2"></i>foton@qodeinteractive.com</a>
                            </li>
                            <li className="py-2">
                                <a href="#" className="text-decoration-none"><i className="bi bi-telephone me-2"></i>+88 (0) 101 0000 000</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 px-3 mt-4">
                        <div className="f-box bg-darkblue rounded-3 p-3 mb-4">
                            <a href="#" className="text-decoration-none f-14"><span className="text-f">@kurichlane</span> and for refund you can get more info at <span className="text-f">https://t.co/TIOAbDkDZ5</span> for Envato refund policy</a>
                        </div>
                        <div className="d-flex">
                            <div className="col-2">
                                <div className="twitter text-center ms-4">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </div>
                            </div>
                            <div className="col-8 ps-3">
                                <a href="#" className="text-decoration-none h5 me-5 mb-0">Qode Interactive </a>
                                <a href="#" className="text-decoration-none fs-6">2 weeks ago</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <h4 className="text-light">Support & Downloads</h4>
                        <p className="text-light pt-2">Quisque actraqum nunc no dolor sit ametaugue dolor. Lorem ipsum dolor sit amet, consyect etur.</p>
                        <div className="d-flex pt-3">
                           <a href="#"> <img src="./img/footer-icon1.png" className="me-3"/></a>
                            <a href="#"><img src="./img/footer-icon2.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <div className="foot-end bg-darkblue p-5">
            <p className="text-center text-light m-0">© 2018 Qode Interactive, All Rights Reserved</p>
        </div>
    </footer>
        </>
    )
}
export default Footer;