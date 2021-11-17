import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pd_thumb from '../../../assets/images/package/pd-thumb.png';
import pr_1 from '../../../assets/images/package/pr-1.png';

import gallery1Img from '../../../assets/images/gallary/gl-1.png';
import gallery2Img from '../../../assets/images/gallary/gl-2.png';
import gallery4Img from '../../../assets/images/gallary/gl-4.png';
import gallery5Img from '../../../assets/images/gallary/gl-5.png';
import gallery6Img from '../../../assets/images/gallary/gl-6.png';

import galleryGxx1Img from '../../../assets/images/gallary/g-xxl-1.png';
import galleryGxx2Img from '../../../assets/images/gallary/g-xxl-2.png';
import galleryGxx3Img from '../../../assets/images/gallary/g-xxl-3.png';

import gallery17Img from '../../../assets/images/gallary/gl-17.png';
import gallery16Img from '../../../assets/images/gallary/gl-16.png';
import gallery14Img from '../../../assets/images/gallary/gl-14.png';

import galleryGxl1Img from '../../../assets/images/gallary/g-xl-1.png';
import galleryGxl2Img from '../../../assets/images/gallary/g-xl-2.png';
import galleryGxl3Img from '../../../assets/images/gallary/g-xl-3.png';
import galleryGxl4Img from '../../../assets/images/gallary/g-xl-4.png';

import pm_sm_1 from '../../../assets/images/package/p-sm-1.png';
import pm_sm_4 from '../../../assets/images/package/p-sm-4.png';
import pm_sm_2 from '../../../assets/images/package/p-sm-2.png';
import pm_sm_3 from '../../../assets/images/package/p-sm-3.png';

import organizer from '../../../assets/images/organizer.png';
import sidebarBannar from '../../../assets/images/sidebar-banner.png';

import { SRLWrapper } from 'simple-react-lightbox';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class PackageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

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
    const startDate = this.state.startDate;

    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Detalhes do Pacote Turístico</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>
                        Pagina inicial
                      </Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Detalhes do Pacote</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="package-details">
                  <div className="package-thumb">
                    <img src={pd_thumb} alt="" />
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>Bioparque da Amazônia.</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Bioparque da Amazônia, Macapá
                      </strong>
                    </div>
                    <div className="pd-review">
                      <p>Excellent</p>
                      <ul>
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
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>800 Review</p>
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duração</strong>
                        <p>Excursão diária</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tipo de viagem</strong>
                        <p>4 Dias</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Tamanho do grupo</strong>
                        <p>30 Pessoas</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>idiomas</strong>
                        <p>Qualquer idioma</p>
                      </div>
                    </div>
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Infomações
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Plano de viagem
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {' '}
                          <i className="flaticon-gallery" />
                          Galeria
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Visão geral</h5>
                                <p>
                                  O Amapá está localizado na esquina do Rio
                                  Amazonas com a linha imaginária do equador. É
                                  o Estado mais preservado do Brasil com 17
                                  unidades de conservação (12 federais e 5
                                  estaduais) imerso a uma biodiversidade que
                                  perpassa por 5(cinco) ecossistemas
                                  Brasileiros, com uma população altamente
                                  acolhedora que buscam manter intacto esse
                                  refúgio de belezas naturais temperado por
                                  tradições culturais únicas, navegar nas águas
                                  do Rio Amazonas, conhecendo furos e igarapés,
                                  vivenciando a vida dos ribeirinhos, com
                                  possibilidade de ver botos da região, tudo
                                  isso ligado a um rica gastronomia como o
                                  delicioso camarão no bafo e artesanato
                                  representativo da cultura Maracá e Cunani.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Destaque</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>
                                      trechos das trilhas terrestres Guarda
                                      Parque.
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>trilha da Onça e do Pau-brasil.</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>
                                      Pellentesque accumsan magna in augue
                                      sagittis, non fringilla eros molestie.
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>brincadeiras e pintura facial.</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>A definir.</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>A definir.</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destino</td>
                                      <td>Macapá</td>
                                    </tr>
                                    <tr>
                                      <td>Depuração</td>
                                      <td>Sim Necessário</td>
                                    </tr>
                                    <tr>
                                      <td>Hora de saída</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Tempo de retorno</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Incluído</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" /> Guia
                                            especializado
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bx-check" />{' '}
                                            Transporte privado
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Taxas
                                            de entrada
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Almoço,Água,Jantar e Lanches
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Excluídos</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {' '}
                                            <i className="bx bx-x" />
                                            Serviços adicionais
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Seguro
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Bebidas
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> Bilhetes
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Viajar de onibus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="p-rationg">
                                <h5>Classificação</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excelente</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Alojamento</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transporte</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comforto</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospedagem</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comida</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="p-review">
                                <ul>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>jose Maicon</strong>
                                        <p>2 April, 2021 10.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>Demais , estao de Parabens </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>Marcio carvalho</strong>
                                        <p>2 April, 2021 10.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>Otimo </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>Bertram Bil</strong>
                                        <p>2 April, 2021 10.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>... </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-review-input">
                                <form>
                                  <h5>Deixe o seu Comentário</h5>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Nome completo"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Seu email"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="text"
                                        placeholder="Tipo de viagem"
                                      />
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
                                      <ul className="input-rating">
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                      <input
                                        type="submit"
                                        defaultValue="Submeter agora"
                                      />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Visão geral</h5>
                                <p>
                                  Macapá é a capital que apresenta os seus
                                  principais cartões-postais, como Marco Zero do
                                  Equador, onde foi construído um obelisco para
                                  a observação do fenômeno solar chamado de
                                  Equinócio, que marca a mudança de estações.
                                  Mas por aqui as surpresas são fenomenais e
                                  gradiosas e os Portuguses vão surpreende - lo
                                  com a maior fortificação da america latina, a
                                  Fortaleza de São José de Macapá. O complexo
                                  Beira-Rio, principal ponto de encontro da
                                  cidade é formado por trapiches, quiosques e
                                  restaurantes que atraem visitantes durante
                                  todo o ano, tudo isso com uma visão surreal do
                                  rio mar, o amazonas bem em frente da cidade de
                                  Macapá, Já o Museu Sacaca tem eu sua área de
                                  atuação ações museológicas de pesquisa,
                                  preservação e comunicação, abrangendo o saber
                                  científico e o saber popular dos povos
                                  amazônicos. Vale a pena conhecer o principal
                                  palco da cultura amapaense, o belo teatro das
                                  Bacabeiras com uma certa frequência de suas
                                  peças teatrais e apresentações de músicos
                                  local e nacional. Foi catedral durantes anos e
                                  é o monumento mais antigo da cidade, sua
                                  construção data do século XVIII, a igreja de
                                  São José não pode ficar de fora de sua visita.
                                  E para finalizar nosso City Tour, vamos
                                  conhecer um figura controversia de nossos
                                  quadro de heróis pelo Brasil, neste caso o do
                                  estado do amapá, “Cabralzinho” o mais
                                  importante defensor do Amapá contra as
                                  invasões francesas.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 1 : Chekin Hotel </h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macapá
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte terrestre e fluvial
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Serviço de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 2 : : CITY TOUR MACAPÁ</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macapá
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Serviço de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 3 : RIVER TOUR RIO AMAZONAS</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macapá
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Serviço de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 4 : A definir</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macapá
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Serviço de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 5 : ARIRI - TOUR DE VIVENCIAS</h5>
                                    <strong>10.00 AM to 10.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macapá
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Serviço de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>

                                      <li>
                                        <i className="bx bx-check" />
                                        Adefinir
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery6Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery6Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-form">
                        <form>
                          <h5 className="package-d-head">
                            Reserve este pacote
                          </h5>
                          <div className="row">
                            <div className="col-lg-12">
                              <input type="text" placeholder="Nome Completo" />
                            </div>
                            <div className="col-lg-12">
                              <input type="email" placeholder="Seu email" />
                            </div>
                            <div className="col-lg-12">
                              <input type="tel" placeholder="Telefone" />
                            </div>
                            <div className="col-lg-12">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Tipo de bilhetes</option>
                                <option value={1}>Viajar de Carro</option>
                                <option value={2}>viajar de Avião</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Adulto</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Criança</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <div
                                className="calendar-input"
                                id="packageCalenderMainDiv"
                              >
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) =>
                                    this.changeDatepickerHandeller(date)
                                  }
                                  className="input-field check-in"
                                  placeholder="dd-mm-yy"
                                />
                                <i
                                  className="flaticon-calendar"
                                  id="packageCalenderIcon"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                cols={30}
                                rows={7}
                                placeholder="Menssagem"
                                defaultValue={''}
                              />
                            </div>
                            <div className="col-lg-12">
                              <input type="submit" defaultValue="Ver agora" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-cards mt-40">
                        <h5 className="package-d-head">Pacotes Populares</h5>
                        <ul className="package-cards">
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_1} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Marco Zero
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_4} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Laranjal do jari
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_2} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Amapá
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_3} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  pedra Branca
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_4} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Cutias
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-organizer mt-40">
                        <h5 className="package-d-head">Organizado por</h5>
                        <div className="organizer-card">
                          <div className="organizer-img">
                            <img src={organizer} alt="" />
                          </div>
                          <div className="organizer-info">
                            <h5>Hotel de viagem</h5>
                            <p>Membro desde 2021</p>
                            <ul className="organizer-rating">
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
                                <i className="bx bx-star" />
                              </li>
                            </ul>
                            <h5>500 Comentários</h5>
                          </div>
                        </div>
                        <div className="p-ask-btn">
                          <Link to={`${process.env.PUBLIC_URL}/contact`}>
                            envie uma pergunta
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-banner mt-40">
                        <img src={sidebarBannar} alt="" className="img-fluid" />
                        <div className="sidebar-banner-overlay">
                          <div className="overlay-content">
                            <h3>Get 50% Ferreira gomes</h3>
                            <div className="sidebar-banner-btn">
                              <Link to={`#`}>Ver Agora</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default PackageDetails;
