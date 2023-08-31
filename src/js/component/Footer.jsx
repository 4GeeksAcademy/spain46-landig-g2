// 1. Import react
import React from "react";

//2. & 4. Create component & Return it
const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                <section className="email">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>Spain-46 Group 2
                            </h5>
                            <p>
                            Group 2 is a dynamic company <br/> dedicated to cultivating the skills <br/>in React development.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Members</h5>
                            <ul className="list-unstyled mb-0 mt-4">
                                <li>
                                    <a href="https://github.com/lgmedina23" className="text-white" target="-blank">Luis Medina</a>
                                </li>
                                <li>
                                    <a href="https://github.com/GabrielM20-1" className="text-white" target="-blank">Gabriel Montaño</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ElisaGDR" className="text-white" target="-blank">Elisa García</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-home me-3 text-secondary"></i> Madrid, Spain</li>
                                <li>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    info@group2.es
                                </li>
                                <li><i className="fas fa-phone me-3 text-secondary"></i> + 34 234 567 88</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;