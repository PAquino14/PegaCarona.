import React, { Component } from 'react';

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* =============== achievement area start =============== */}
        <div className="achievement-area p-80 mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-30">
                  <h5>Porque pegaCarona</h5>
                  <h2>Porque é que viaja com pegaCarona</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="achievement-card mt-30">
                  <div className="achievement-icon">
                    <i className="flaticon-guide" />
                  </div>
                  <h5>2000+ O nosso mundo guia</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="achievement-card mt-30">
                  <div className="achievement-icon">
                    <i className="flaticon-trust" />
                  </div>
                  <h5>Agência de viagens de confiança a 100%</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="achievement-card mt-30">
                  <div className="achievement-icon">
                    <i className="flaticon-experience" />
                  </div>
                  <h5>Mais de 10 anos de experiência de viagem</h5>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="achievement-card mt-30">
                  <div className="achievement-icon">
                    <i className="flaticon-traveller" />
                  </div>
                  <h5>90% do nosso viajante feliz</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== achievement area end =============== */}
      </>
    );
  }
}

export default Achievement;
