import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/SaludNatural/Bamboo/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/SaludNatural/Bamboo/Imagen.png';
import Footer from '../../components/Footer'


export default class SaludNaturalBamboo extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true}  showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative',left:'165px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-275px', height: '770px', right: '-50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: 'relative', top: '70px'}}>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '200px'}}>Obtén tu nuevo Colgate Bamboo.</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '200px'}}>Además de estar hecho 100% de madera de bambú, tiene bordes redondeados</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '200px'}}>y cerdas infundidas en carbón que le hacen bien a tu boca y al planeta.</p>

                <div className="mt-5" style={{ position: 'relative', top: '30px', left: '200px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px' }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px' }}><strong className="text-danger mr-2">+</strong>Mango elaborado con bambú 100% natural - 100% Biodegradable</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px' }}><strong className="text-danger mr-2">+</strong>El bambú que usamos es elaborado de forma responsable, usando métodos de cultivos sostenibles</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px' }}><strong className="text-danger mr-2">+</strong>Empaque de cartón reciclable</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px' }}><strong className="text-danger mr-2">+</strong>Mango cubierto con ingredientes naturales para prevenir humedad</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px' }}><strong className="text-danger mr-2">+</strong>Las cerdas son suaves, con infusión de carbón y sales de bambú* para una limpieza efectiva</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="saludnaturalmenu" screenPrev="saludnaturalmenu" currentScreen="SaludNatural" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}