import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Blanqueamiento/DientesBlancos/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/DientesBlancos/Imagen.png';
import Footer from '../../components/Footer'


export default class LuminousWhiteInstant extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand lessexpand" />
              </div>
              <div className="column pl-5 pt-4"style={{ position: 'relative', top: '70px' }}>
                <p className="small text-muted text-normal">Presume una sonrisa deslumbrante utilizando la Crema Dental Colgate</p>
                <p className="small text-muted text-normal">Luminous White Instant Blanqueadora, en cada aplicación su poderosa</p>
                <p className="small text-muted text-normal">fórmula te brindará la oportunidad de potenciar el color blanco de tus</p>
                <p className="small text-muted text-normal">dientes.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>Gracias a que contiene abrillantadores ópticos que actuarán eficazmente</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>para eliminar las manchas o el aspecto amarillento de tu esmalte dental,</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>podrás hablar y sonreír en público con la confianza de que lucirás una</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '30px' }}>boca deslumbrante digna de presumir.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '50px' }}>Desde la primera aplicación conseguirás resultados altamente</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '50px' }}>profesionales como los tratamientos de blanqueamiento profesional que</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '50px' }}>ofrecen los odontólogos<b className="text-danger text-inferior">*</b></p>
                <p className="small mt-5 text-danger text-inferior" style={{ position: 'relative', top: '50px', right: '35px' }}>*Efecto blanqueador instantáneo es temporal</p>
              </div>
            </div>
          </div>
          <Footer screenNext="carbonactivado" screenPrev="blanqueamientomenu" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="210px" />
        </div>
      </div>
    );
  }
}