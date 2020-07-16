import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/XtraBlancura/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/XtraBlancura/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarXtraBlancura extends React.Component {


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
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top: '50px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column pr-4">
                <img src={img} alt="error" style={{ position: 'relative', top: '130px', right: '0px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: "relative", top: '50px', left:'180px' }}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>La crema dental Colgate Triple Acción Extra Blancura* te ofrece multi-</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>protección para una sonrisa extraordinaria con su fórmula con extra</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>micro-partículas pulidoras para dientes más blancos y para la protección </p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>de tu salud bucal y la de toda tu familia.</p>

                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px'}}>Obtén triple beneficio: Protección, Xtra Blancura, y Frescura, con tu</p>
                <p className="small text-muted text-normal" style={{ position: 'relative', left: '-130px', top:'70px' }}>crema dental Colgate Triple Acción Extra Blancura.</p>
                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '20px', left: '-100px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Remueve manchas</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Funciona desde el primer cepillado</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Blancura Natural</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarxtrafrescura" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}