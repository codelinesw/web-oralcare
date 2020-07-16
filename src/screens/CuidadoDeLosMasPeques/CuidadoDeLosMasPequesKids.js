import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Cuidadodelosmaspeques/Kids/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Cuidadodelosmaspeques/Kids/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoDeLosMasPequesKids extends React.Component {

  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block container-items" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_cleanmint" style={{  position: 'relative', width:'300px', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative', top:'150px'}}>
              <div className="column">
                <img src={img} alt="error" style={{ position: 'relative', width:'980px',left: '-50px' }} />
              </div>
              <div className="column" style={{position:"relative",top:'30px',left:'0px'}}>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', lineHeight:'1.2' }}>Crema dental Colgate Kids para dientes fuertes y protegidos. Viene en 3<br/>deliciosos y divertidos sabores: Tutifruti, Fresantástico y Uvaventura que<br/>harán más fácil la tarea de enseñar a los pequeños de la casa la<br/>importancia de una salud bucal adecuada y alentarlos a cepillarse las 3<br/>veces recomendadas para evitar daño en sus pequeños dientes.<br/><br/>Su fórmula clínicamente comprobada para dar protección contra las<br/>caries, cuenta con una presentación en gel que hace menos espuma,<br/>permitiendo que los niños completen la tarea sin necesitar de un adulto<br/>ya que cuenta con la cantidad adecuada de fluoruro para los niños. Es<br/>apta para niños de 1 año en adelante.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="totalcuidadodelosmaspequesmenu" screenPrev="cuidadodelosmaspequesmenu" currentScreen="Cuidadochicos" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}