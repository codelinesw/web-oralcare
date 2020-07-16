import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Blanqueamiento/360Advanced/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Blanqueamiento/360Advanced/Imagen.png';
import Footer from '../../components/Footer'


export default class AdvancedLuminousWhite extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" className="title_advanced lx30" style={{ position: 'relative' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" className="productFive rx50_" style={{ position: 'relative' }} />
              </div>
              <div className="column pt-4 mt-0" style={{position:'relative', top:'50px'}}>
                <p className="small text-muted text-normal">Especialmente diseñado para blanquear los dientes. Posee copas </p>
                <p className="small text-muted text-normal">blanqueadoras y cerdas que pulen los dientes.</p>
                <p className="small text-danger text-normal font-weight-bold font-italic" style={{ position: 'relative', top:'50px', marginTop: '' }}>BENEFICIOS:</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px'}}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px'}}>Copas removedoras de manchas.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative' }}>Cerdas pulidoras exclusivas.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative' }}>Limpiador de lengua y mejillas único y punta limpiadora elevada.</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative'}}>Diseño avanzado y limpieza efectiva y cómoda.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="luminouswhite360" screenPrev="blanqueamientomenu" currentScreen="Blanqueamiento" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}