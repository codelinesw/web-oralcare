import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Multibeneficios/AlientoSaludable/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/AlientoSaludable/Imagen.png';
import Footer from '../../components/Footer'


export default class AlientoSaludable extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    //document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block container-box" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_cleanmint" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5 mr-5">
                <img src={img} alt="error" style={{ position: 'relative', left: '-50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: 'relative', right: '0px', top: '0px' }}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', lineHeight: 1.5 }}>Obtén una protección inigualable contra el mal aliento gracias a su tecnología Neutro-Odor, la cual hace parte de su sabor, que ayuda a neutralizar el mal aliento causado por bacterias para brindarte una salud bucal completa.<br/><br/>Descubre en cada aplicación cómo su poderosa fórmula actuará eliminando los gérmenes, bacterias o restos de alimento que se adhieren en tu boca y en ocasiones pueden causarte problemas como la aparición de caries, acumulación de placa, sarro o gingivitis.<br/><br/>Encuentra su presentación en paquete con 3 unidades de 75 mililitros cada una, ideal para tener repuestos en tu tocador o llevarlas al trabajo, escuela, universidad o gimnasio, para cumplir con los tres cepillados al día necesarios para mantener la salud de tu boca.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="ultrasoft" screenPrev="multibeneficiosmenu" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}