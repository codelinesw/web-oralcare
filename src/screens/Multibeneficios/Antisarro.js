import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Multibeneficios/Antisarro/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/Antisarro/Imagen.png';
import Footer from '../../components/Footer'


export default class Antisarro extends React.Component {

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
              <img src={titulo} alt="error" className="title_cleanmint" style={{ position: 'relative', left: '30px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100" style={{position:'relative', top:'150px'}}>
              <div className="column">
                <img src={img} alt="error" style={{ position: 'relative', left: '-50px' }} />
              </div>
              <div className="column" style={{position:"relative",top:'30px',left:'0px'}}>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>Prueba  la nueva Colgate Total 12 Anti Sarro, nueva fórmula con micro</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>partículas que limpian y combaten la formación de sarro y te brindan 12</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>horas de protección activa contra bacterias.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>El sarro, a veces denominado cálculo o tártaro dental, es la placa</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>bacteriana que se ha endurecido sobre sus dientes debido al depósito de</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>minerales sobre la placa bacteriana. También se puede formar en el</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>borde de las encías y debajo de ellas y puede irritar los tejidos</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>gingivales.</p>
              </div>
            </div>
          </div>
          <Footer screenNext="totalcleanmint" screenPrev="multibeneficiosmenu" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}