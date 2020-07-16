import React from 'react';
import background_ from '../../images/FONDO2.png';
import T1 from '../../images/Productos/Sensibilidad/Cepillos/T1.png';
import T2 from '../../images/Productos/Sensibilidad/Cepillos/T2.png';
import T3 from '../../images/Productos/Sensibilidad/Cepillos/T3.png';
import Header from '../../components/Header';
import img1 from '../../images/Productos/Sensibilidad/Cepillos/01.png';
import img2 from '../../images/Productos/Sensibilidad/Cepillos/02.png';
import img3 from '../../images/Productos/Sensibilidad/Cepillos/03.png';
import Footer from '../../components/Footer'


export default class SensibilidadCepillos extends React.Component {


  componentDidMount() {
    document.body.style.backgroundImage = `url(${background_})`;
    document.body.style.backgroundColor = "white";
  }




  render() {
    return (
      <div className="container-fluid">
        <Header showBotonMenu={true} showBotonMenuS={true} />
        <div className="row m-auto d-block" style={{ position: 'relative', top: '0px', width: '100%' }}>
          <div className="card m-auto bg-transparent border-0 container-box">
            <div className="card-body d-flex justify-content-center w-100" style={{ position: 'relative', top: '80px' }}>
              <div className="card-body d-flex justify-content-center w-100"style={{ position: 'relative', left: '100px' }}>
                <div className="column mt-5">
                  <img src={img1} alt="error" style={{ position: 'relative', width: '150px' }} />
                </div>
                <div className="column" style={{ position: "relative", top: '150px', marginLeft: '20px' }}>
                  <img src={T1} alt="error" style={{ position: 'relative', width: '300px' }} />
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', lineHeight:'1.2' }}>Limpieza profunda. 300% encías mas <br/>saludables.</p>
                  <div className="" style={{ position: 'relative', marginTop: '50px' }}>
                    <p className="text-danger text-normal font-weight-bold font-italic">BENEFICIOS:</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Ergonómico y confortable.</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative',lineHeight:'1'}}>-Cerdas con punta delgada de<br/>&nbsp;&nbsp;0.01mm.</p>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex justify-content-center w-100" style={{position:"relative",left:'50px'}}>
                <div className="column mt-5">
                  <img src={img2} alt="error" style={{ position: 'relative', width: '205px' }} />
                </div>
                <div className="column" style={{ position: "relative", top: '150px', marginLeft: '20px' }}>
                  <img src={T2} alt="error" style={{ position: 'relative', width: '200px' }} />
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', lineHeight:'1'}}>Cerdas  17x más delgadas para una<br/> limpieza más profunda.</p>
                  <div className="" style={{ position: 'relative', marginTop: '50px' }}>
                    <p className="text-danger text-normal font-weight-bold font-italic">BENEFICIOS:</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative',lineHeight:'1' }}>-Remueve el 88% de la placa en un<br/>&nbsp;&nbsp;solo cepillado.</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative',lineHeight:'1' }}>-Limpieza profunda y a la vez<br/>&nbsp;&nbsp;delicada.</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Ergonómico y flexible</p>
                  </div>
                </div>
              </div>
              <div className="card-body d-flex justify-content-center w-100" style={{position:"relative",left:'0px'}}>
                <div className="column mt-5">
                  <img src={img3} alt="error" style={{ position: 'relative', width: '125px' }} />
                </div>
                <div className="column" style={{ position: "relative", top: '150px', marginLeft: '20px' }}>
                  <img src={T3} alt="error" style={{ position: 'relative', width: '200px' }} />
                  <p className="small text-muted text-normal" style={{ position: 'relative', marginTop: '20px', lineHeight:'1'}}>Para una limpieza efectiva, 5500 cerdas<br/>en alta densidad para una<br/>limpieza suave y eficaz.</p>
                  <div className="" style={{ position: 'relative', marginTop: '50px' }}>
                    <p className="text-danger text-normal font-weight-bold font-italic">BENEFICIOS:</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative',lineHeight:'1' }}>-Ultra suave</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative', lineHeight:'1' }}>-1 mm ultra suaves filamentos en<br/>&nbsp;&nbsp;alta densidad para una gentil y<br/>&nbsp;&nbsp;eficaz limpieza</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Gentil en las encías</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Remueve la placa</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Remueve las manchas superficiales</p>
                    <p className="small text-muted text-normal" style={{ position: 'relative' }}>-Ayuda a proteger de las caries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <Footer screenNext="sensibilidadenjuague" screenPrev="sensibilidadmenu" currentScreen="Sensibilidad" showsubmenu={true} history={this.props.history} top="105px" classForStyle='top_x30' />
        </div>
      </div>
    );
  }
}