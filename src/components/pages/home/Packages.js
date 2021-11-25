import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Load Image
import package1Img from '../../../assets/images/package/marcozero.png';
import package2Img from '../../../assets/images/package/mazagao.png';
import package3Img from '../../../assets/images/package/amapa.png';
import package4Img from '../../../assets/images/package/serra-2.png';
import package5Img from '../../../assets/images/package/calcoene.png';
import package6Img from '../../../assets/images/package/jari.png';

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* ===============  Package  area start =============== */}
        <div className="package-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h5>Escolha o seu pacote</h5>
                  <h2>Selecione o melhor pacote para sua viagem!</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package1Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$180</span>/Por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Dias/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Macapá{' '}
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package2Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$280</span>/por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Dias/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Mazagão Velho
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package3Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$120</span>/Por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Dias/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Município do Amapá
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package4Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$300</span>/Por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Dias/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Serra do Navio
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package5Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$240</span>/Por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Dias/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Calçoene
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      <img src={package6Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>R$145</span>/Por pessoa
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 Diass/6 noites
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        Laranjal do Jari
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Classificação
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}

export default Packages;
