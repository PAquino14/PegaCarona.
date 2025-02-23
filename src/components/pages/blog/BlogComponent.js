import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import b_1 from '../../../assets/images/blog/b-1.png';
import b_2 from '../../../assets/images/blog/b-2.png';
import b_3 from '../../../assets/images/blog/b-3.png';
import b_4 from '../../../assets/images/blog/b-4.png';
import b_5 from '../../../assets/images/blog/b-5.png';
import b_6 from '../../../assets/images/blog/b-6.png';
import b_7 from '../../../assets/images/blog/b-7.png';
import b_8 from '../../../assets/images/blog/b-8.png';
import b_9 from '../../../assets/images/blog/b-9.png';
import b_10 from '../../../assets/images/blog/b-10.png';
import b_11 from '../../../assets/images/blog/b-11.png';
import b_12 from '../../../assets/images/blog/b-12.png';
import b_13 from '../../../assets/images/blog/b-13.png';
import b_14 from '../../../assets/images/blog/b-14.png';

class BlogComponent extends Component {
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Blog</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>
                        Pagina Inicial
                      </Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Blog wrapper area start =============== */}
        <div className="blog-wrapper pt-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  read
                  <div className="blog-img">
                    <img src={b_1} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_2} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_3} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Maio, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_4} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Maio, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Albert Anbi
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(12)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_5} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Maio, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Benjamin Din
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_6} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      ...
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_7} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" />1 Maio, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Donec egestas orci viverra fermentum risus.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_8} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Cameron Ca
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(7)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Class aptent taciti sociosqu litora torquent per.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_9} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Watnil Cook
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(9)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Pellentesque pellentesque err metus nisi ac viv.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_10} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Donec egestas orci viverra fermentum risus.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_11} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Lomin Vume
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      vitae euismod nulla Vivamus consequat posuere.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_12} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Maecenas vehicula risus non neque tincidunt.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_12} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Angile Kaif
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Aenean sit amet ipsum nulla tempor finibus.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_13} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Jahid Hassan
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Praesent id aliquet felis vene Fusce a odio natis.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={b_14} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 Abril, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        <i className="flaticon-user" />
                        Dina Jems
                      </Link>
                      <Link to={`#`} className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comentário
                      </Link>
                    </div>

                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details`}
                      className="blog-title"
                    >
                      Mauris ullamcorper risus the eget eleifend accumsan.
                    </Link>

                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details`}
                        className="btn-common-sm"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination mt-50">
                  <Link to={'#'}>
                    <i className="bx bx-chevron-left" />
                  </Link>
                  <Link to={'#'} className="active">
                    1
                  </Link>
                  <Link to={'#'}>2</Link>
                  <Link to={'#'}>3</Link>
                  <Link to={'#'}>4</Link>
                  <Link to={'#'}>
                    <i className="bx bx-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Blog wrapper area end =============== */}
      </>
    );
  }
}

export default BlogComponent;
