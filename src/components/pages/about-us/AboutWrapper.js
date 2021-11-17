import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

import about1Img from '../../../assets/images/about-1.png';
import about2Img from '../../../assets/images/about-2.png';
import { Link } from 'react-router-dom';

class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {/* ===============  About wrapper area start =============== */}
        <div className="about-wrapper mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="about-wrapper-left">
                  <div className="about-img">
                    <img src={about1Img} alt="" className="img-fluid" />
                  </div>
                  <div className="about-video">
                    <img src={about2Img} alt="" className="img-fluid" />
                    <i
                      onClick={() => this.setState({ isOpen: true })}
                      class="flaticon-play-button-arrowhead"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-wrapper-right section-head head-left">
                  <h5>Porque PegaCarona</h5>
                  <h2>A melhor agência de viagens.</h2>
                  <p>
                    apresentar excursões, passeios e roteiros turístico, bem
                    como outras opções de lazer para os visitantes como pontos
                    turísticos e restaurantes. Além de possibilitar a compra de
                    passagens diretamente na plataforma, sugerindo atividades na
                    localidade de destino no período pesquisado. Assim, a
                    aplicação visa promover a regionalização de buscas de
                    passagens e pacotes de viagem e o fomento do turismo no
                    Estado Amapá.
                  </p>
                  <ul className="about-list">
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                    <li>
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a
                    </li>
                  </ul>
                  <div className="about-wrapper-btn">
                    <Link to={'#'} className="btn-common">
                      Leia mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="-tJYN-eG1zk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </React.Fragment>

        {/* ===============  About wrapper area end =============== */}
      </>
    );
  }
}

export default AboutWrapper;
