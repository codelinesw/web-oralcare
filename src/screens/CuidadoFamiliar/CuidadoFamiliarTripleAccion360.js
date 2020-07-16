import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/CuidadoFamiliar/TripleAccion360/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/CuidadoFamiliar/TripleAccion360/Imagen.png';
import Footer from '../../components/Footer'


export default class CuidadoFamiliarTripleAccion360 extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true}/>
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '90%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-header bg-transparent border-0 d-flex justify-content-center">
              <img src={titulo} alt="error" width="700" style={{ position: 'relative', top: '50px', left: '200px' }} />
            </div>
            <div className="card-body d-flex justify-content-center w-100">
              <div className="column mt-5">
                <img src={img} alt="error" style={{ position: 'relative', top: '-190px', height: '730px', right: '0px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <div className="mt-5" style={{ position: 'relative', top: '30px', right: '35px' }}>
                  <p className="small text-muted text-normal top-30" style={{ position: 'relative', left: '200px', marginTop: '0px', marginBottom: '85px' }}>Cerdas interdentales multinivel para limpieza de últimos molares.</p>
                  <p className="text-danger title-red" style={{ position: 'relative', marginTop: '0px', left: '200px', }}>BENEFICIOS:</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', left: '200px', }}>Copa removedora de manchas</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '0px', left: '200px', }}>Limpiadora de lengua, mejillas y encías</p>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px', left: '200px', }}>Efectiva remoción de la placa bacteriana</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="cuidadofamiliarsoftmint" screenPrev="cuidadofamiliarmenu" currentScreen="CuidadoFamiliar" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}