import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Blanqueamiento/LuminousWhite/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/LuminousWhite/Imagen.png';
import Footer from '../../components/Footer'


export default class LuminousWhiteNormal extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 ">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_multibene" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" className="image-left expand"/>
              </div>
              <div className="column pl-5 pt-4" style={{position:'relative', top:'100px'}}>
                <p className="small text-muted text-normal">Empieza tu día con toda la confianza y seguridad que la Crema Dental</p>
                <p className="small text-muted text-normal">Colgate Luminous White tiene para ti y sorprende a todos con una</p>
                <p className="small text-muted text-normal">dentadura impecable. Sus microcristales aceleradores de</p>
                <p className="small text-muted text-normal">blanqueamiento contienen ingredientes similares a los usados por los</p>
                <p className="small text-muted text-normal">dentistas, asegurando resultados espectaculares<b className="text-danger text-inferior">*</b></p>
                <p className="small text-muted text-normal" style={{position:'relative', top:'30px'}}>Gracias a su fórmula Brilliant White podrás conseguir un tono más blanco</p>
                <p className="small text-muted text-normal" style={{position:'relative', top:'30px'}}>en tan solo una semana, mientras que con el flúor en los ingredientes</p>
                <p className="small text-muted text-normal" style={{position:'relative', top:'30px'}}>podrás disfrutar de unos dientes libre de caries y molestas manchas</p>
                <p className="small text-muted text-normal" style={{position:'relative', top:'30px'}}>causadas por alimentos como el té o café.</p>
                <p className="small mt-5 text-danger text-inferior" style={{ position: 'relative', top: '50px', right: '35px' }}>*Mediante el cepillado con crema dental Colgate Luminous White</p>                
                <p className="small mt-5 text-danger text-inferior" style={{ position: 'relative', top: '10px', right: '35px' }}><span>&nbsp;&nbsp;</span>vs crema dental regular con flúor</p>
              </div>
            </div>
          </div>
          <Footer screenNext="luminouswhiteinstant" screenPrev="blanqueamientomenu" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="210px" />
        </div>
      </div>
    );
  }
}