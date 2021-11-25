import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

//Import Images
import features1Img from '../../../assets/images/feature/pg.png';
import features2Img from '../../../assets/images/feature/pg.png';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const featuresOptions = {
      items: 2,
      loop: true,
      margin: 30,
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
          items: 1,
          nav: false,
          dots: false,
        },
        1000: {
          items: 2,
          dots: false,
          nav: false,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* ===============  Feature area start =============== */}
        <div className="feature-area mt-120 p-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-60">
                  <h5>Excursões em Destaque</h5>
                  <h2>Conheça os nossos melhores destinos populares</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <OwlCarousel
                  className="feature-slider owl-carousel"
                  {...featuresOptions}
                >
                  <div className="feature-card">
                    <div className="feature-img">
                      <img src={features1Img} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        className="title"
                      >
                        Viagem em grupo Para Macapá
                      </Link>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Classificação
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img src={features2Img} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        className="title"
                      >
                        Viagem em grupo Para Macapá
                      </Link>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Classificação
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img src={features1Img} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        className="title"
                      >
                        Viagem em grupo para macapá
                      </Link>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Classificação
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img src={features2Img} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        className="title"
                      >
                        Viagem em grupo para Macapá
                      </Link>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Classificação
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img src={features1Img} alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details`}
                        className="title"
                      >
                        Viagem em grupo para Macapá
                      </Link>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Classificação
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Feature area start =============== */}
      </>
    );
  }
}

export default Features;
