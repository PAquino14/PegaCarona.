import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import destinations1Img from '../../../assets/images/destination/santana.png';
import destinations4Img from '../../../assets/images/destination/santana-2.png';
import destinations5Img from '../../../assets/images/destination/santana-3.png';
import destinations6Img from '../../../assets/images/destination/santana-1.png';
import destinations7Img from '../../../assets/images/destination/marco.png';
import destinations8Img from '../../../assets/images/destination/museu.png';
import destinations9Img from '../../../assets/images/destination/forte.png';
import destinations10Img from '../../../assets/images/destination/d-10.png';
import destinations11Img from '../../../assets/images/destination/d-11.png';
import destinations2Img from '../../../assets/images/destination/macapa.png';
import destinations3Img from '../../../assets/images/destination/d-3.png';

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 2,
          nav: false,
          dost: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Escolha o seu pacote</h5>
                  <h2>Seleccione o seu melhor pacote para a sua viagem</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations1Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>santana</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations4Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Samaúma Santana Ilha
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations5Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Igarapé Fortaleza
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span>Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations6Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/ Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Igreja Matriz de Santana
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Marco zero do equador
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-2"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Marco zero do equador
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations8Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Museu Sacaca
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span>Classificação
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations9Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Fortaleza de São José de Macapá
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations10Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          praça floriano peixoto, Macapá
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations2Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Macapá</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations3Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Amapá</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations11Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Praça do coco , Macapá
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations5Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Maritime Heritage
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations9Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Souks of Deira
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations4Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Por pessoa
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Jumeirah Mosque
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Classificação
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default Destinations;
