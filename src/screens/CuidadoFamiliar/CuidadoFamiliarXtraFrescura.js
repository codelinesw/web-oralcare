import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/XtraFrescura/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/XtraFrescura/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarXtraFrescura extends React.Component {


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
                <img src={img} alt="error" style={{ position: 'relative', top: '150px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0" style={{ position: 'relative', top: '130px', left: '150px' }}>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px', marginTop: '-65px' }}>La crema dental Colgate Triple Acción Extra Frescura<strong className="text-danger mr-2">*</strong> con micro - cristales te brinda una</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px' }}>sensación de frescura de larga duración y protección de tu salud bucal y la de toda tu</p>
                <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '-130px', marginBottom: '85px' }}>familia.</p>
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '-100px', }}>OBTEN TRIPLE BENEFICIO:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Protección</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>Blancura y Extra Frescura*</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '-5px', left: '-100px', }}>con tu crema dental Colgate Triple Acción Extra Frescura*.</p>
                </div>
                <p className="small mt-5 text-danger text-inferior" style={{ position: 'relative', top: '50px', left: '-130px' }}>*Frescura, dientes blancos y protección anticaries</p>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliartripleaccion" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}