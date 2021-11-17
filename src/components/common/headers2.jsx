import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Import Image
import logoMain from '../../assets/images/logo-4.png';
import secondLogo from '../../assets/images/logo-2.png';

class HeaderTwo extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <>
        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area-2 header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex justify-content-between">
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className="navbar-brand"
                        onClick={this.scrollTop}
                      >
                        <img src={logoMain} alt="" />
                      </Link>
                    </div>
                    <div className="navbar-icons">
                      <div className="searchbar-open">
                        <i className="flaticon-magnifier" />
                      </div>
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bx-user-pin" />
                              <Link to={'#'}>entrar</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={'#'}>Minha conta</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bx-extension" />
                              <Link to={'#'}>definições</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bx-log-in-circle" />
                              <Link to={'#'}>Sair</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mobile-menu d-flex ">
                        <div className="top-search-bar m-0 d-block d-xl-none"></div>
                        <Link to={'#'} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <nav className="main-nav">
                    <div className="navber-logo-sm">
                      <img src={secondLogo} alt="" className="img-fluid" />
                    </div>
                    <ul>
                      <li className="has-child-menu">
                        <Link to={'#'}>Pagina inicial</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Pagina 1
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/home-page-2`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              pagina 2
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/about-us`}
                          onClick={this.scrollTop}
                        >
                          sobre nos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/destination`}
                          onClick={this.scrollTop}
                        >
                          Destinos
                        </NavLink>
                      </li>

                      <li className="has-child-menu">
                        <Link to={'#'}>Pacotes turisticos</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Pacotes Personalizados
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-sidebar`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              barra lateral do pacote
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-standard`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              pacote padrão
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-details`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Detalhes do pacote
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="has-child-menu">
                        <Link to={'#'}>Blogs</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/blog`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Pagina do blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Barra Lateral
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/blog-standard`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Padrão do Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Detalhes do Blog{' '}
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="has-child-menu">
                        <Link to={'#'}>Paginas</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/gallary`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              página da galeria
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/guide`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Gia Turistico
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/destination`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              pagina de destino
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/404`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              pagina 404
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/faq`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              pagina FaQ
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={this.scrollTop}
                        >
                          Contate nos
                        </NavLink>
                      </li>
                    </ul>
                    <div className="navbar-icons-2">
                      <div className="searchbar-open">
                        <i className="flaticon-magnifier" />
                      </div>
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bx-user-pin" />
                              <Link to={`#`}>Sign in</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={`#`}>My Account</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bx-extension" />
                              <Link to={`#`}>Settings</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bx-log-in-circle" />
                              <Link to={`#`}>Log out</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <a href="tel:+17632275032">+55 763-227-5032</a>
                        </li>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-envelope" />
                          <a href="mailto:info@example.com">
                            pegacarona@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <form>
              <div className="main-searchbar">
                <div className="searchbar-close">
                  <i className="bx bx-x" />
                </div>
                <input type="text" placeholder="Search Here......" />
                <div className="searchbar-icon">
                  <i className="bx bx-search" />
                </div>
              </div>
            </form>
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }
}

export default HeaderTwo;
