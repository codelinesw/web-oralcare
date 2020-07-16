import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Multibeneficios/Total12-Clean-Mint/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Multibeneficios/Total12-Clean-Mint/Imagen-01.png';
import Footer from '../../components/Footer'


export default class TotalCleanMint extends React.Component {


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
              <div className="column" style={{position:"relative",left:'0px'}}>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>Luce una sonrisa saludable y radiante utilizando diariamente la Crema</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>Dental Colgate Total 12 Clean Mint, con la que podrás disfrutar en cada</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>cepillado de una limpieza profunda de cada parte que integra tu boca,</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px' }}>incluyendo dientes, mejillas, encías y lengua. </p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>Descubre en cada aplicación cómo su poderosa fórmula actuará</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>Eliminando los gérmenes, bacterias o restos de alimento que se adhieren </p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>en tu boca y en ocasiones pueden causarte problemas como la aparición</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>de caries, acumulación de placa, sarro o gingivitis.</p>
                <p className="small text-muted mt-5 text-normal" style={{ position: 'relative', top: '40px' }}></p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '34px' }}>Para una salud bucal completa que te protege más allá de los dientes,</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', top: '31px' }}>reduciendo bacterias en lengua, mejillas y encías hasta por 12 horas <b className="text-danger text-inferior">*</b></p>
                <p className="small mt-5 text-danger text-inferior" style={{ position: 'relative', top: '50px', right: '35px' }}>*Con cuatro(4) semanas de uso continuo</p>
              </div>
            </div>
          </div>
          <Footer screenNext="saludvisible" screenPrev="multibeneficiosmenu" currentScreen="Multibeneficios" showsubmenu={true} history={this.props.history} top="105px" />
        </div>
      </div>
    );
  }
}