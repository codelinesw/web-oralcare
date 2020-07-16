import React from 'react';
import background_ from '../../images/FONDO2.png';
import titulo from '../../images/Productos/Sensibilidad/ReparacionCompleta/Titulo.png';
import Header from '../../components/Header';
import img from '../../images/Productos/Sensibilidad/ReparacionCompleta/Imagen.png';
import Footer from '../../components/Footer'


export default class SensibilidadReparacionCompleta extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundSize = "cover";
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
                <img src={img} alt="error" style={{ position: 'relative', width: '870px', top: '140px', right: '50px' }} />
              </div>
              <div className="column pt-4 mt-0">
                <div className="mt-5" style={{ position: 'relative', top: '70px', right: '35px' }}>
                  <p className="small text-muted text-normal" style={{ position: 'relative', top: '0px',lineHeight:1.5 }}>Olvídate de la sensibilidad con la Crema Dental Sensitive Pro-Alivio Reparación Completa que Colgate tiene para ti y disfruta tus alimentos favoritos sin preocuparte de las molestias. Su exclusiva fórmula Pro-Argin se caracteriza por la reducción inmediata del 60% del dolor causado por la hipersensibilidad.<br/><br/>Gracias a la arginina presente en el producto tiene beneficios demostrados en la salud bucodental, mostrando que los resultados persisten hasta por seis semanas con un uso diario y de aplicación directa. En conjunto con el zinc ayuda a fortalecer la encía para reducir la recesión que exponen los túbulos de los dientes responsables de la sensibilidad.</p>
                </div>
              </div>
            </div>
          </div>
          <Footer screenNext="sensibilidadproaliviooriginal" screenPrev="sensibilidadmenu" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}