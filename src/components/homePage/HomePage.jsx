import React from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../Login";
export const HomePage = () => {

    const navigate = useNavigate();

    const PrincipalPage = () => {
        navigate("/Principal");
    }

    return (
        <div className="App" style={{ background: '#c4dafa' }}>
            <header className="menu menu2 cid-tJS6tZXiPa" id="menu02-0">
                <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg opacityScroll" style={{ background: '#005187', color: '#fcffff' }}>
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-logo">
                                <a href="https://mobirise.com/">
                                    <img src="https://kinalbank.slack.com/files/U075GJRGNN6/F075KCYBXT6/kinalbank.png" alt="" style={{ height: '3rem' }} />
                                </a>
                            </span>
                            <span className="navbar-caption-wrap">
                                <a className="navbar-caption text-black text-primary display-4" href="#header05-1">KIBANK</a>
                            </span>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger">
                                <span>Ingles</span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        <div className="collapse navbar-collapse opacityScroll" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                <li className="nav-item">
                                    <a className="nav-link link text-black text-primary display-4" href="#header01-7">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-black text-primary display-4" href="#header01-7">Agencia Virtual</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-black text-primary display-4" href="#features04-w" aria-expanded="false">Horario</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link link text-black text-primary dropdown-toggle display-4" href="#contacts02-9" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Español</a>
                                    <div className="dropdown-menu" data-bs-popper="none" aria-labelledby="dropdown-266">
                                        <a className="text-black text-primary dropdown-item display-4" href="#contacts02-9">Ingles</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="header5 cid-tJS6uM4N87" id="header05-1">
                <div className="topbg" style={{ background: '#84b6f4' }}></div>
                <div className="align-center container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-9"></div>
                    </div>
                    <div className="row mt-5 justify-content-center"></div>
                </div>
            </section>

            <section className="form5 cid-tJS9pBcTSa" id="form02-6">
                <div className="container">
                    <div className="mbr-section-head mb-5">
                        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2 animate__animated animate__delay-1s animate__fadeIn" style={{ color: '#fcffff' }}>
                            <strong>KINALBANK</strong>
                        </h3>
                        <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7 animate__animated animate__delay-1s animate__fadeIn" style={{ color: '#fcffff' }}>
                            <div>KINALBANK Cerca de ti!!</div>
                        </h4>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                            <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name">
                                <div className="row">
                                    <div hidden data-form-alert="" className="alert alert-success col-12">Thanks for filling out the form!</div>
                                    <div hidden data-form-alert-danger="" className="alert alert-danger col-12">Oops...! some problem!</div>
                                </div>
                            </form>
                            <Login/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
/*<div className="dragArea row">
                                <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                                        <input type="email" name="email" placeholder="Email" data-form-field="email" className="form-control" id="email-form02-6" />
                                    </div>
                                    
                                    <div className="col-12 form-group mb-3" data-for="textarea">
                                        <textarea name="textarea" placeholder="Contraseña" data-form-field="textarea" className="form-control" id="textarea-form02-6"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                                        <button type="submit" className="btn btn-primary display-7" onClick={PrincipalPage}>
                                            <span className="mobi-mbri mobi-mbri-login mbr-iconfont mbr-iconfont-btn"></span>Iniciar Sesión
                                        </button>
                                    </div>
                                </div>*/