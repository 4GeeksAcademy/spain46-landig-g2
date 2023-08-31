// 1. Import react
import React from "react";

//2. & 4. Create component & Return it
export const Jumbotron = () => {
    return (
        <jumbotron className="bg-dark text-center text-white">
            <div className="container py-4">
                <header className="pb-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                       
                        <span className="fs-4">Jumbotron example</span>
                    </a>
                </header>

                <div className="container">
                    <div className="container-fluid py-5">
                        <span className="fs-4">Jumbotron example</span>
                        <span className="fs-4">Jumbotron example</span>
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>

                <div className="row align-items-md-stretch">
                    <div className="">
                        <div className="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button className="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                   
                </div>

                <footer className="pt-3 mt-4 text-body-secondary border-top">
                    © 2023
                </footer>
            </div>

        </jumbotron>
    );
};
