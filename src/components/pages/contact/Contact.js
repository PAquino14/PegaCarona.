import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AboutUs extends Component {
  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Contate-nos </h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>Inicio</Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Contate-nos </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="contact-wrapper pt-90">
          <div className="contact-cards">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-arrival" />
                    </div>
                    <div className="contact-info">
                      <h5>Endereço</h5>
                      <p>Rua Elshadai, 554 - Infraero II.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-customer-service" />
                    </div>
                    <div className="contact-info">
                      <h5>Email e Telefone</h5>
                      <p>(96) 946464684 pegacarona@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-thumbs-up" />
                    </div>
                    <div className="contact-info">
                      <h5>Rede social</h5>
                      <ul className="contact-icons">
                        <li>
                          <Link to={'#'}>
                            <i className="bx bxl-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to={'#'}>
                            <i className="bx bxl-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to={'#'}>
                            <i className="bx bxl-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to={'#'}>
                            <i className="bx bxl-whatsapp" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-inputs pt-100">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-details">
                    <h5 className="contact-d-head">Entre em contato</h5>
                    <p>De segunda a sexta</p>
                    <ul className="office-clock">
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>Aberto</h5>
                          <p> 8:00</p>
                        </div>
                      </li>
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>17:00 </h5>
                          <p></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-form">
                    <form action="#">
                      <h5 className="contact-d-head">Contate-nos </h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            placeholder="nome completo"
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Assunto" required />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            placeholder="Digite seu email"
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Telefone" required />
                        </div>
                        <div className="col-lg-12">
                          <textarea
                            cols={30}
                            rows={7}
                            placeholder="Escrever mensagem"
                            defaultValue={''}
                          />
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" defaultValue="Submeter agora" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
