const Service = ()=>{
    return(
        <>
    <section className="p-top">
        <div className="container">
            <div className="row">
                <h2 className="f-45 text-center f-main fw-normal">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card border-0">
                            <img src="./img/home-3-blog-img-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="h4 card-title f-main f-weight pt-2">New Artwork Unveiled</h5>
                                <p className="text-muted mt-2">
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.</p>
                                <h5 className="f-main small-t text-uppercase">Read More<i className="bi bi-arrow-right ms-2"></i> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card border-0">
                            <img src="./img/home-3-blog-img-6.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body ">
                                <h5 className="h4 card-title f-main f-weight pt-2">Making Art Accessible</h5>
                                <p className="text-muted mt-2">
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.</p>
                                <h5 className="f-main small-t text-uppercase">Read More<i className="bi bi-arrow-right ms-2"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card border-0">
                            <img src="./img/home-3-blog-img-2.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body ">
                                <h5 className="h4 card-title f-main f-weight pt-2">Wireless Headphones</h5>
                                <p className="text-muted mt-2">
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.</p>
                                <h5 className="f-main small-t text-uppercase">Read More<i className="bi bi-arrow-right ms-2"></i></h5>
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
export default Service;