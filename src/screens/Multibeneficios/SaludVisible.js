import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Multibeneficios/TotalProfessional/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/TotalProfessional/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludVisible extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true}/>
        <div className="row m-auto d-block" style={{ position: 'relative', top: '70px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" style={{ position: 'relative', left: '30px', width:'800px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative',top:'100px'}}>
              <div className="column">
                <img src={img} alt="error" style={{ position: 'relative',left: '-50px', top:'30px' }} />
              </div>
              <div className="column pt-4 mt-5">
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px'}}>Descubre cómo su inigualable fórmula cuenta con una tecnología que</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>cambia de color la espuma generada en cada cepillado.</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '31px' }}>El color blanco cambiará a un tono azul, indicándote el momento preciso</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '31px' }}>en el que su protección hace efecto en tu boca, eliminando los gérmenes y</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '31px' }}>bacterias que se quedan entre tus dientes, mejillas, encías o lengua,</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '31px' }}>dejarás un delicioso y refrescante aliento durante todo el día, devolviendo</p>
                <p className="small text-muted mt-3 text-normal" style={{ position: 'relative', top: '31px' }}>a tu personalidad la confianza de poder reír o hablar en público.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="enciasaludables" screenPrev="multibeneficiosmenu" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="35px" />
        </div>
      </div>
    );
  }
}