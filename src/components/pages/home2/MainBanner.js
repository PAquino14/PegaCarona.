import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import offer1Image from '../../../assets/images/package/offer-1.png';
import offer2Image from '../../../assets/images/package/offer-2.png';
import offer3Image from '../../../assets/images/package/offer-3.png';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    const mainBannerOptions = {
      stagePadding: 1,
      items: 3,
      loop: true,
      margin: 25,
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
          dots: false,
        },
        1000: {
          items: 3,
          dots: false,
          nav: false,
          loop: true,
        },
      },
    };

    const startDate = this.state.startDate;

    return (
      <>
        {/* ===============  main banner area 2 start =============== */}
        <div className="main-banner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="main-banner-content-2">
                  <h2>
                    Incrível Visita a <br />
                    <span className="element">laranjal do Jari</span>{' '}
                  </h2>
                  <h3>7 Dias, 8 noites</h3>
                </div>
              </div>
            </div>
            <div className="find-form-2">
              <form className="findfrom-wrapper">
                <div className="row">
                  <div className="col-lg-3">
                    <input type="text" placeholder="de onde..." />
                  </div>

                  <div className="col-lg-3">
                    <input
                      type="text"
                      name="de onde"
                      placeholder="para onde..."
                    />
                  </div>
                  <div className="col-lg-3">
                    <div className="calendar-input">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) =>
                          this.changeDatepickerHandeller(date)
                        }
                        className="input-field check-in"
                        placeholder="dd-mm-yy"
                      />
                      <i className="flaticon-calendar" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="find-btn">
                      <Link to={'#'} className="btn-second">
                        <i className="bx bx-search-alt" /> pesquisar agora
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ===============  main banner area 2 end =============== */}

        {/* ===============  Offer area start =============== */}
        <div className="offer-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-30">
                  <h5>Oferta especial</h5>
                  <h2>As nossas aventuras mais populares e melhores</h2>
                </div>
              </div>
            </div>

            <OwlCarousel
              className="offer-slider dark-nav owl-carousel"
              {...mainBannerOptions}
            >
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer1Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Dias/6 noites
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      Marco Zero, Macapá
                    </Link>
                  </h3>
                  <strong>
                    $150 <span>$200</span>
                  </strong>
                </div>
              </div>
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer2Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Dias/6 noites
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      fortaleza de são jose, Macapa
                    </Link>
                  </h3>
                  <strong>
                    $170 <span>$200</span>
                  </strong>
                </div>
              </div>
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer3Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Dias/6 noites
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      Cachoeira de sato Antonio, Laranjal do Jari
                    </Link>
                  </h3>
                  <strong>
                    $150 <span>$200</span>
                  </strong>
                </div>
              </div>
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer1Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Dias/6 noites
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      bio parque, Macapá
                    </Link>
                  </h3>
                  <strong>
                    $150 <span>$200</span>
                  </strong>
                </div>
              </div>
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer2Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Days/6 night
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      Bar do Almeirim, laranjal do Jari
                    </Link>
                  </h3>
                  <strong>
                    $170 <span>$200</span>
                  </strong>
                </div>
              </div>
              <div className="offer-card">
                <div className="offer-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                    <img src={offer3Image} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="offer-details">
                  <div className="offer-info">
                    <h5>
                      <i className="flaticon-calendar" />5 Days/6 night
                    </h5>
                    <ul className="offer-rating">
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <i className="flaticon-arrival" />
                    <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                      French Rivira, France
                    </Link>
                  </h3>
                  <strong>
                    $150 <span>$200</span>
                  </strong>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* ===============  Offer area end =============== */}
      </>
    );
  }
}

export default MainBanner;
